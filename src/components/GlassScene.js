/* eslint-disable react/no-unknown-property */
import { useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useThemeContext } from '../context/ThemeContext';
import { drawerWidth } from './SideDrawer';

// ── PLASMA SHADERS (Three.js GLSL3 — position/uv/projectionMatrix injected by r3f) ───
const plasmaVert = /* glsl */`
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;

const plasmaFrag = /* glsl */`
uniform vec2  iResolution;
uniform float iTime;
uniform vec3  uCustomColor;
uniform float uSpeed;
uniform float uDirection;
uniform float uScale;
uniform float uOpacity;
out vec4 fragColor;

void mainImage(out vec4 o, vec2 C) {
  vec2 center = iResolution.xy * 0.5;
  C = (C - center) / uScale + center;
  float i, d, z, T = iTime * uSpeed * uDirection;
  vec3 O, p, S;
  for (vec2 r = iResolution.xy, Q; ++i < 60.; O += o.w/d*o.xyz) {
    p = z * normalize(vec3(C - .5*r, r.y));
    p.z -= 4.;
    S = p;
    d = p.y - T;
    p.x += .4*(1.+p.y)*sin(d+p.x*0.1)*cos(.34*d+p.x*0.05);
    Q = p.xz *= mat2(cos(p.y+vec4(0,11,33,0)-T));
    z += d = abs(sqrt(length(Q*Q))-.25*(5.+S.y))/3.+8e-4;
    o = 1.+sin(S.y+p.z*.5+S.z-length(S-p)+vec4(2,1,0,8));
  }
  o.xyz = tanh(O/1e4);
}

void main() {
  vec4 o = vec4(0.0);
  mainImage(o, gl_FragCoord.xy);
  vec3 rgb = clamp(o.rgb, 0.0, 1.0);
  float intensity = (rgb.r + rgb.g + rgb.b) / 3.0;
  fragColor = vec4(intensity * uCustomColor, uOpacity);
}`;

// ── IRIDESCENCE SHADERS ────────────────────────────────────────────────────────
const iridescenceVert = /* glsl */`
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;

const iridescenceFrag = /* glsl */`
uniform float uTime;
uniform vec3  uColor;
uniform vec2  uResolution;
uniform float uSpeed;
in vec2 vUv;
out vec4 fragColor;

void main() {
  float mr = min(uResolution.x, uResolution.y);
  vec2 uv = (vUv * 2.0 - 1.0) * uResolution / mr;
  float d = -uTime * 0.5 * uSpeed;
  float a = 0.0;
  for (float i = 0.0; i < 8.0; ++i) {
    a += cos(i - d - a * uv.x);
    d += sin(uv.y * i + a);
  }
  d += uTime * 0.5 * uSpeed;
  vec3 col = vec3(cos(uv * vec2(d, a)) * 0.6 + 0.4, cos(a + d) * 0.5 + 0.5);
  col = cos(col * cos(vec3(d, a, 2.5)) * 0.5 + 0.5) * uColor;
  fragColor = vec4(col, 1.0);
}`;

// ── ANIMATED BACKGROUND ────────────────────────────────────────────────────────
function Background({ mode }) {
  const { size } = useThree();

  const plasmaUniforms = useMemo(() => ({
    iTime:       { value: 0 },
    iResolution: { value: new THREE.Vector2(size.width, size.height) },
    uCustomColor:{ value: new THREE.Color('#ff6b35') },
    uSpeed:      { value: 0.24 },
    uDirection:  { value: 1.0 },
    uScale:      { value: 1.1 },
    uOpacity:    { value: 1.0 },
  }), []);

  const iridescenceUniforms = useMemo(() => ({
    uTime:       { value: 0 },
    uResolution: { value: new THREE.Vector2(size.width, size.height) },
    uColor:      { value: new THREE.Vector3(0.5, 0.6, 0.8) },
    uSpeed:      { value: 1.0 },
  }), []);

  useFrame(({ clock, size: s }) => {
    if (mode === 'dark') {
      plasmaUniforms.iTime.value = clock.elapsedTime;
      plasmaUniforms.iResolution.value.set(s.width, s.height);
    } else {
      iridescenceUniforms.uTime.value = clock.elapsedTime;
      iridescenceUniforms.uResolution.value.set(s.width, s.height);
    }
  });

  const uniforms   = mode === 'dark' ? plasmaUniforms     : iridescenceUniforms;
  const vertShader = mode === 'dark' ? plasmaVert          : iridescenceVert;
  const fragShader = mode === 'dark' ? plasmaFrag          : iridescenceFrag;

  return (
    <mesh scale={[size.width, size.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        key={mode}
        vertexShader={vertShader}
        fragmentShader={fragShader}
        uniforms={uniforms}
        glslVersion={THREE.GLSL3}
      />
    </mesh>
  );
}

// ── NAVBAR GLASS ───────────────────────────────────────────────────────────────
const APPBAR_PX = 64;

function NavbarGlass() {
  const { size } = useThree();
  const y = size.height / 2 - APPBAR_PX / 2;

  return (
    <mesh position={[0, y, 1]} scale={[size.width, APPBAR_PX, APPBAR_PX]}>
      <boxGeometry args={[1, 1, 1]} />
      <MeshTransmissionMaterial
        ior={1.15}
        thickness={5}
        transmission={1}
        roughness={0}
        chromaticAberration={0.08}
        anisotropy={0.01}
        color="white"
        transparent
        samples={2}
        resolution={512}
      />
    </mesh>
  );
}

// ── SIDEBAR GLASS ──────────────────────────────────────────────────────────────
function SidebarGlass() {
  const { size } = useThree();
  const x = -size.width / 2 + drawerWidth / 2;

  return (
    <mesh position={[x, 0, 1]} scale={[drawerWidth, size.height, drawerWidth]}>
      <boxGeometry args={[1, 1, 1]} />
      <MeshTransmissionMaterial
        ior={1.15}
        thickness={5}
        transmission={1}
        roughness={0}
        chromaticAberration={0.08}
        anisotropy={0.01}
        color="white"
        transparent
        samples={2}
        resolution={512}
      />
    </mesh>
  );
}

// ── SCENE ──────────────────────────────────────────────────────────────────────
function Scene({ mode }) {
  return (
    <>
      <Background mode={mode} />
      <NavbarGlass />
      <SidebarGlass />
    </>
  );
}

// ── EXPORTED COMPONENT ─────────────────────────────────────────────────────────
export default function GlassScene() {
  const { mode } = useThemeContext();

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: -1, pointerEvents: 'none' }}>
      <Canvas
        orthographic
        camera={{ zoom: 1, near: -1000, far: 1000, position: [0, 0, 100] }}
        gl={{ antialias: false, alpha: false }}
        style={{ width: '100%', height: '100%' }}
        dpr={Math.min(window.devicePixelRatio, 2)}
      >
        <Scene mode={mode} />
      </Canvas>
    </div>
  );
}
