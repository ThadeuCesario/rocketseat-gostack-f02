import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.106:3333'
});

export default api;

/**
 * iOS com Emulador: localhost
 * iOS com físico: IP da máquina
 * Android com Emulador: Para utilizar o localhost precisa fazer um adb reverse alterando as portas.
 * Android com Emulador: 10.0.2.2 (Android Studio)
 * Android com Emulador: 10.0.3.2 (Genymotion)
 * Android com físico: IP da máquina
 */