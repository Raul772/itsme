uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform vec3 uColor4;
uniform float uIntensity;

// varying vec2 vUv;
varying float vNoise;

void main() {
    float mixStrength = ((vNoise * 2.3) + 1.0) / 2.0;
    // float debugValue = (vNoise + 1.0) / 2.0;

    mixStrength = clamp(mixStrength, 0.0 , 1.0);
    
    vec3 color = uColor1;

    color = mix(color, uColor2, smoothstep(0.0, 0.33, mixStrength));
    color = mix(color, uColor3, smoothstep(0.33, 0.66, mixStrength));
    color = mix(color, uColor4, smoothstep(0.66, 1.0, mixStrength));

    gl_FragColor = vec4(color, uIntensity);
}