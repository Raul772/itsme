uniform vec3 uColor;
varying vec2 vUv;
varying float vElevation;

void main() {
    // Normalizamos a elevação (assumindo que varia mais ou menos entre -1.5 e 1.5)
    // para um valor entre 0.0 e 1.0 para atuar como intensidade
    float intensity = (vElevation + 1.5) / 3.0;
    
    // Mistura uma versão mais escura com uma versão mais clara da sua cor base
    vec3 shadowColor = uColor * 0.2;
    vec3 highlightColor = uColor * 1.5;
    
    vec3 finalColor = mix(shadowColor, highlightColor, intensity);

    gl_FragColor = vec4(finalColor, 1.0);
}