import { useState, useEffect, useRef } from "react";

function HackTheBoxIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 33" fill="currentColor">
      <path d="M29.6,9.3C29.6,9.3,29.6,9.3,29.6,9.3c0-0.3-0.1-0.6-0.4-0.8c0,0,0,0,0,0c0,0,0,0-0.1-0.1c0,0-0.1,0-0.1-0.1 c0,0,0,0,0,0L16.6,1.2c0,0-0.1,0-0.1,0C16.3,1,16.1,1,15.9,1c-0.1,0-0.2,0-0.3,0.1c-0.1,0-0.1,0.1-0.2,0.1L3,8.3c0,0,0,0,0,0 c0,0,0,0,0,0c0,0,0,0,0,0C2.8,8.4,2.8,8.5,2.7,8.6c0,0,0,0,0,0C2.5,8.8,2.4,9,2.4,9.3c0,0,0,0,0,0c0,0,0,0,0,0v14.3 c0,0.4,0.2,0.8,0.6,1l12.4,7.2c0,0,0,0,0.1,0c0,0,0,0,0,0c0.1,0,0.1,0.1,0.2,0.1c0,0,0,0,0,0c0.1,0,0.2,0,0.2,0c0.1,0,0.2,0,0.2,0 c0,0,0,0,0,0c0.1,0,0.1,0,0.2-0.1c0,0,0,0,0,0c0,0,0,0,0.1,0L29,24.7c0.4-0.2,0.6-0.6,0.6-1L29.6,9.3C29.6,9.4,29.6,9.3,29.6,9.3z M7.3,8.9L15.7,4c0.2-0.1,0.4-0.1,0.5,0l8.4,4.9c0.4,0.2,0.4,0.7,0,0.9l-8.4,4.9c-0.2,0.1-0.4,0.1-0.5,0L7.3,9.8 C6.9,9.6,6.9,9.1,7.3,8.9z M14.5,27.4c0,0.4-0.4,0.7-0.8,0.5L5.3,23C5.1,22.9,5,22.7,5,22.5v-9.7c0-0.4,0.4-0.7,0.8-0.5l8.4,4.9 c0.2,0.1,0.3,0.3,0.3,0.5V27.4z M27,22.5c0,0.2-0.1,0.4-0.3,0.5l-8.4,4.9c-0.4,0.2-0.8-0.1-0.8-0.5v-9.7c0-0.2,0.1-0.4,0.3-0.5 l8.4-4.9c0.4-0.2,0.8,0.1,0.8,0.5V22.5z" />
    </svg>
  );
}

function TryHackMeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 438.67 246.67" fill="currentColor">
      <g transform="matrix(1.3333333,0,0,-1.3333333,0,246.66667)">
        <g transform="scale(0.1)" fill="currentColor">
          <path d="m 2064.53,973.359 h -78.67 v 324.921 h -109.45 v 74.14 h 297.57 v -74.14 H 2064.53 V 973.359" />
          <path d="m 2371.76,1192.27 c -53.01,0 -79.81,-35.9 -79.81,-90.08 V 973.359 h -72.38 V 1258.4 h 48.44 l 8.01,-61.56 c 21.09,39.92 59.25,65.54 112.85,65.54 h 11.99 v -70.11 h -29.1" />
          <path d="m 2743.98,1009.84 c 0,-83.199 -54.14,-145.352 -142.5,-145.352 -52.46,0 -95.78,18.793 -126.56,44.461 l 41.06,43.903 c 27.34,-13.672 53,-22.813 85.5,-22.231 41.06,0 69.54,21.098 69.54,62.699 v 18.24 c -18.25,-23.361 -48.44,-33.63 -78.09,-33.63 -82.66,0 -124.84,56.45 -124.84,139.1 v 141.37 h 72.38 v -137.38 c 0,-52.47 25.08,-72.97 63.87,-72.97 41.01,0 67.26,24.53 67.26,79.25 v 131.1 h 72.38 v -248.56" />
          <path d="M 2144.92,465.43 V 629.059 H 1990.43 V 465.43 h -78.67 v 399.058 h 78.67 V 703.16 h 154.49 v 161.328 h 78.67 V 465.43 h -78.67" />
          <path d="m 2526.25,607.969 c 0,46.722 -35.94,76.371 -73.55,76.371 -38.17,0 -73.52,-29.649 -73.52,-76.371 0,-46.758 35.35,-75.821 73.52,-75.821 37.61,0 73.55,29.063 73.55,75.821 z m 18.24,-142.539 -3.98,40.468 c -21.1,-26.796 -55.31,-43.867 -94.65,-43.867 -80.94,0 -139.06,64.957 -139.06,145.938 0,80.941 58.12,146.48 139.06,146.48 39.34,0 73.55,-17.648 94.65,-44.449 l 3.98,40.469 h 48.48 V 465.43 h -48.48" />
          <path d="m 2931.52,701.449 -43.32,-46.758 c -23.4,21.68 -43.9,29.098 -68.98,29.098 -38.2,0 -73.56,-29.098 -73.56,-75.82 0,-46.758 35.36,-75.821 73.56,-75.821 25.08,0 45.58,7.383 68.98,29.063 l 43.32,-46.762 c -26.79,-31.91 -67.26,-52.418 -112.3,-52.418 -80.98,0 -145.94,64.957 -145.94,145.938 0,80.941 64.96,145.941 145.94,145.941 45.04,0 85.51,-20.551 112.3,-52.461" />
          <path d="m 3158.36,541.25 c -17.11,26.211 -26.8,35.941 -54.14,35.941 h -19.96 V 465.43 h -72.38 v 399.058 h 72.38 V 646.719 h 17.65 c 26.8,0 36.49,9.14 53.6,35.902 l 44.45,67.848 h 80.39 l -63.87,-96.328 c -11.95,-18.832 -27.93,-36.481 -40.43,-41.602 14.22,-4.57 30.2,-22.809 43.33,-42.769 l 68.39,-104.34 h -80.39 l -49.02,75.82" />
          <path d="M 2224.73,7.80859 V 262.66 L 2104.45,113.281 1984.73,262.66 V 7.80859 h -78.68 V 406.879 h 46.76 l 151.64,-190.43 152.19,190.43 h 46.76 V 7.80859 h -78.67" />
          <path d="m 2472.07,175.98 h 130.55 c 0,6.829 -2.31,15.969 -6.84,22.809 -9.69,18.242 -30.23,31.91 -57.58,31.91 -38.79,0 -65,-27.34 -66.13,-54.719 z m 191.52,43.899 c 12,-26.207 12.54,-65 4.57,-89.488 h -198.94 c 0,-38.7894 31.91,-59.8793 70.66,-59.8793 29.65,0 60.43,6.8672 86.1,19.9571 l 38.2,-41.5977 C 2633.4,26.0508 2590.62,4.41016 2539.88,4.41016 c -86.64,0 -145.35,62.69924 -145.35,145.94184 0,80.937 54.73,146.488 143.67,146.488 60.98,0 103.75,-29.07 125.39,-76.961" />
          <path d="m 976.051,894.77 v 135.19 l -34.289,-26.48 -22.621,30.93 60.55,44.46 h 39.799 v -184.1 h -43.439" />
          <path d="m 1154.41,987.34 c 0,5.711 -0.35,12.039 -1.01,18.99 -0.7,6.91 -1.99,13.4 -3.91,19.37 -1.91,5.98 -4.65,11.02 -8.2,15.08 -3.56,4.06 -8.17,6.1 -13.91,6.1 -5.7,0 -10.39,-2.04 -14.02,-6.1 -3.67,-4.06 -6.48,-9.1 -8.48,-15.08 -1.99,-5.97 -3.32,-12.46 -4.02,-19.37 -0.7,-6.951 -1.06,-13.279 -1.06,-18.99 0,-5.891 0.36,-12.34 1.06,-19.371 0.7,-7.028 2.03,-13.52 4.02,-19.489 2,-5.98 4.81,-11.019 8.48,-15.082 3.63,-4.097 8.32,-6.128 14.02,-6.128 5.74,0 10.35,2.031 13.91,6.128 3.55,4.063 6.29,9.102 8.2,15.082 1.92,5.969 3.21,12.461 3.91,19.489 0.66,7.031 1.01,13.48 1.01,19.371 z m 44.73,0 c 0,-13 -1.29,-25.391 -3.91,-37.18 -2.57,-11.801 -6.75,-22.148 -12.46,-31.058 -5.74,-8.942 -13.12,-16.051 -22.22,-21.332 -9.1,-5.27 -20.16,-7.93 -33.17,-7.93 -13,0 -24.1,2.66 -33.28,7.93 -9.18,5.281 -16.68,12.39 -22.5,21.332 -5.78,8.91 -10,19.257 -12.62,31.058 -2.57,11.789 -3.86,24.18 -3.86,37.18 0,13.01 1.29,25.36 3.86,37.04 2.62,11.71 6.84,21.95 12.62,30.7 5.82,8.75 13.32,15.7 22.5,20.94 9.18,5.19 20.28,7.77 33.28,7.77 13.01,0 24.07,-2.58 33.17,-7.77 9.1,-5.24 16.48,-12.19 22.22,-20.94 5.71,-8.75 9.89,-18.99 12.46,-30.7 2.62,-11.68 3.91,-24.03 3.91,-37.04" />
          <path d="m 1443.16,894.77 v 135.19 l -34.29,-26.48 -22.66,30.93 60.59,44.46 h 39.8 v -184.1 h -43.44" />
          <path d="m 1621.52,987.34 c 0,5.711 -0.35,12.039 -1.01,18.99 -0.71,6.91 -1.99,13.4 -3.91,19.37 -1.91,5.98 -4.65,11.02 -8.2,15.08 -3.56,4.06 -8.2,6.1 -13.91,6.1 -5.7,0 -10.39,-2.04 -14.02,-6.1 -3.67,-4.06 -6.49,-9.1 -8.48,-15.08 -1.99,-5.97 -3.32,-12.46 -4.02,-19.37 -0.7,-6.951 -1.06,-13.279 -1.06,-18.99 0,-5.891 0.36,-12.34 1.06,-19.371 0.7,-7.028 2.03,-13.52 4.02,-19.489 1.99,-5.98 4.81,-11.019 8.48,-15.082 3.63,-4.097 8.32,-6.128 14.02,-6.128 5.71,0 10.35,2.031 13.91,6.128 3.55,4.063 6.29,9.102 8.2,15.082 1.92,5.969 3.2,12.461 3.91,19.489 0.66,7.031 1.01,13.48 1.01,19.371 z m 44.73,0 c 0,-13 -1.29,-25.391 -3.91,-37.18 -2.57,-11.801 -6.75,-22.148 -12.46,-31.058 -5.74,-8.942 -13.12,-16.051 -22.22,-21.332 -9.11,-5.27 -20.16,-7.93 -33.17,-7.93 -13.01,0 -24.1,2.66 -33.28,7.93 -9.18,5.281 -16.68,12.39 -22.5,21.332 -5.82,8.91 -10,19.257 -12.62,31.058 -2.57,11.789 -3.86,24.18 -3.86,37.18 0,13.01 1.29,25.36 3.86,37.04 2.62,11.71 6.8,21.95 12.62,30.7 5.82,8.75 13.32,15.7 22.5,20.94 9.18,5.19 20.27,7.77 33.28,7.77 13.01,0 24.06,-2.58 33.17,-7.77 9.1,-5.24 16.48,-12.19 22.22,-20.94 5.71,-8.75 9.89,-18.99 12.46,-30.7 2.62,-11.68 3.91,-24.03 3.91,-37.04" />
          <path d="m 972.031,605 v 135.199 l -34.332,-26.527 -22.621,30.937 60.582,44.493 h 39.81 V 605 h -43.439" />
          <path d="m 1125.08,605 v 135.199 l -34.34,-26.527 -22.62,30.937 60.59,44.493 h 39.81 V 605 h -43.44" />
          <path d="m 1277.46,605 v 135.199 l -34.34,-26.527 -22.57,30.937 60.54,44.493 h 39.81 V 605 h -43.44" />
          <path d="m 1463.71,697.582 c 0,5.699 -0.35,12.027 -1.05,18.938 -0.67,6.96 -2,13.402 -3.87,19.378 -1.91,5.981 -4.65,11.012 -8.2,15.082 -3.56,4.102 -8.21,6.129 -13.91,6.129 -5.74,0 -10.39,-2.027 -14.06,-6.129 -3.64,-4.07 -6.45,-9.101 -8.44,-15.082 -1.99,-5.976 -3.32,-12.418 -4.02,-19.378 -0.71,-6.911 -1.06,-13.239 -1.06,-18.938 0,-5.902 0.35,-12.352 1.06,-19.383 0.7,-7.027 2.03,-13.508 4.02,-19.488 1.99,-5.981 4.8,-11.012 8.44,-15.082 3.67,-4.098 8.32,-6.129 14.06,-6.129 5.7,0 10.35,2.031 13.91,6.129 3.55,4.07 6.29,9.101 8.2,15.082 1.87,5.98 3.2,12.461 3.87,19.488 0.7,7.031 1.05,13.481 1.05,19.383 z m 44.73,0 c 0,-13.012 -1.29,-25.391 -3.91,-37.191 -2.62,-11.801 -6.76,-22.153 -12.5,-31.09 -5.7,-8.91 -13.12,-16.02 -22.23,-21.289 -9.1,-5.313 -20.11,-7.93 -33.12,-7.93 -13.01,0 -24.1,2.617 -33.28,7.93 -9.18,5.269 -16.68,12.379 -22.5,21.289 -5.82,8.937 -10,19.289 -12.62,31.09 -2.58,11.8 -3.9,24.179 -3.9,37.191 0,12.969 1.32,25.348 3.9,37.027 2.62,11.723 6.8,21.911 12.62,30.661 5.82,8.789 13.32,15.75 22.5,20.98 9.18,5.16 20.27,7.77 33.28,7.77 13.01,0 24.02,-2.61 33.12,-7.77 9.11,-5.23 16.53,-12.191 22.23,-20.98 5.74,-8.75 9.88,-18.938 12.5,-30.661 2.62,-11.679 3.91,-24.058 3.91,-37.027" />
          <path d="m 1060,398.629 v 98.133 l -24.92,-19.223 -16.41,22.422 43.99,32.309 h 28.86 V 398.629 H 1060" />
          <path d="m 1280.98,398.629 v 98.133 l -24.93,-19.223 -16.44,22.422 43.98,32.309 h 28.91 V 398.629 h -31.52" />
          <path d="m 971.68,465.82 c 0,4.141 -0.231,8.75 -0.739,13.789 -0.511,5 -1.453,9.692 -2.851,14.063 -1.371,4.34 -3.36,7.969 -5.942,10.937 -2.578,2.93 -5.937,4.411 -10.078,4.411 -4.179,0 -7.582,-1.481 -10.191,-4.411 -2.66,-2.968 -4.688,-6.597 -6.141,-10.937 -1.476,-4.371 -2.418,-9.063 -2.929,-14.063 -0.508,-5.039 -0.778,-9.648 -0.778,-13.789 0,-4.3 0.27,-8.98 0.778,-14.058 0.511,-5.082 1.453,-9.852 2.929,-14.184 1.453,-4.34 3.481,-7.969 6.141,-10.937 2.609,-2.969 6.012,-4.411 10.191,-4.411 4.141,0 7.5,1.442 10.078,4.411 2.582,2.968 4.571,6.597 5.942,10.937 1.398,4.332 2.34,9.102 2.851,14.184 0.508,5.078 0.739,9.758 0.739,14.058 z m 32.46,0 c 0,-9.449 -0.94,-18.441 -2.81,-26.992 -1.881,-8.558 -4.92,-16.098 -9.06,-22.539 -4.18,-6.519 -9.54,-11.68 -16.141,-15.508 -6.598,-3.832 -14.649,-5.742 -24.059,-5.742 -9.449,0 -17.5,1.91 -24.179,5.742 -6.68,3.828 -12.11,8.989 -16.332,15.508 -4.219,6.441 -7.258,13.981 -9.137,22.539 -1.91,8.551 -2.852,17.543 -2.852,26.992 0,9.41 0.942,18.399 2.852,26.879 1.879,8.512 4.918,15.93 9.137,22.301 4.222,6.328 9.652,11.41 16.332,15.199 6.679,3.75 14.73,5.66 24.179,5.66 9.41,0 17.461,-1.91 24.059,-5.66 6.601,-3.789 11.961,-8.871 16.141,-15.199 4.14,-6.371 7.179,-13.789 9.06,-22.301 1.87,-8.48 2.81,-17.469 2.81,-26.879" />
          <path d="m 1193.91,465.82 c 0,4.141 -0.24,8.75 -0.75,13.789 -0.5,5 -1.44,9.692 -2.85,14.063 -1.36,4.34 -3.36,7.969 -5.93,10.937 -2.58,2.93 -5.94,4.411 -10.08,4.411 -4.18,0 -7.58,-1.481 -10.2,-4.411 -2.65,-2.968 -4.72,-6.597 -6.13,-10.937 -1.49,-4.371 -2.46,-9.063 -2.93,-14.063 -0.51,-5.039 -0.78,-9.648 -0.78,-13.789 0,-4.3 0.27,-8.98 0.78,-14.058 0.47,-5.082 1.44,-9.852 2.93,-14.184 1.41,-4.34 3.48,-7.969 6.13,-10.937 2.62,-2.969 6.02,-4.411 10.2,-4.411 4.14,0 7.5,1.442 10.08,4.411 2.57,2.968 4.57,6.597 5.93,10.937 1.41,4.332 2.35,9.102 2.85,14.184 0.51,5.078 0.75,9.758 0.75,14.058 z m 32.46,0 c 0,-9.449 -0.94,-18.441 -2.82,-26.992 -1.91,-8.558 -4.92,-16.098 -9.06,-22.539 -4.18,-6.519 -9.53,-11.68 -16.13,-15.508 -6.6,-3.832 -14.65,-5.742 -24.06,-5.742 -9.46,0 -17.5,1.91 -24.18,5.742 -6.68,3.828 -12.11,8.989 -16.33,15.508 -4.22,6.441 -7.27,13.981 -9.14,22.539 -1.92,8.551 -2.85,17.543 -2.85,26.992 0,9.41 0.93,18.399 2.85,26.879 1.87,8.512 4.92,15.93 9.14,22.301 4.22,6.328 9.65,11.41 16.33,15.199 6.68,3.75 14.72,5.66 24.18,5.66 9.41,0 17.46,-1.91 24.06,-5.66 6.6,-3.789 11.95,-8.871 16.13,-15.199 4.14,-6.371 7.15,-13.789 9.06,-22.301 1.88,-8.48 2.82,-17.469 2.82,-26.879" />
          <path d="m 1648.83,398.629 v 98.133 l -24.92,-19.223 -16.45,22.422 43.99,32.309 h 28.9 V 398.629 h -31.52" />
          <path d="m 1561.76,465.82 c 0,4.141 -0.24,8.75 -0.74,13.789 -0.51,5 -1.45,9.692 -2.86,14.063 -1.36,4.34 -3.36,7.969 -5.93,10.937 -2.58,2.93 -5.94,4.411 -10.08,4.411 -4.18,0 -7.58,-1.481 -10.2,-4.411 -2.65,-2.968 -4.68,-6.597 -6.17,-10.937 -1.4,-4.371 -2.38,-9.063 -2.89,-14.063 -0.51,-5.039 -0.78,-9.648 -0.78,-13.789 0,-4.3 0.27,-8.98 0.78,-14.058 0.51,-5.082 1.49,-9.852 2.89,-14.184 1.49,-4.34 3.52,-7.969 6.17,-10.937 2.62,-2.969 6.02,-4.411 10.2,-4.411 4.14,0 7.5,1.442 10.08,4.411 2.57,2.968 4.57,6.597 5.93,10.937 1.41,4.332 2.35,9.102 2.86,14.184 0.5,5.078 0.74,9.758 0.74,14.058 z m 32.46,0 c 0,-9.449 -0.94,-18.441 -2.81,-26.992 -1.92,-8.558 -4.93,-16.098 -9.07,-22.539 -4.18,-6.519 -9.53,-11.68 -16.13,-15.508 -6.6,-3.832 -14.65,-5.742 -24.06,-5.742 -9.45,0 -17.5,1.91 -24.18,5.742 -6.68,3.828 -12.11,8.989 -16.33,15.508 -4.22,6.441 -7.26,13.981 -9.14,22.539 -1.91,8.551 -2.85,17.543 -2.85,26.992 0,9.41 0.94,18.399 2.85,26.879 1.88,8.512 4.92,15.93 9.14,22.301 4.22,6.328 9.65,11.41 16.33,15.199 6.68,3.75 14.73,5.66 24.18,5.66 9.41,0 17.46,-1.91 24.06,-5.66 6.6,-3.789 11.95,-8.871 16.13,-15.199 4.14,-6.371 7.15,-13.789 9.07,-22.301 1.87,-8.48 2.81,-17.469 2.81,-26.879" />
          <path d="m 1527.54,241.172 v 98.129 l -24.92,-19.262 -16.45,22.5 43.99,32.262 h 28.9 V 241.172 h -31.52" />
          <path d="m 1440.47,308.359 c 0,4.141 -0.24,8.75 -0.74,13.789 -0.51,5 -1.45,9.692 -2.85,14.063 -1.37,4.34 -3.36,7.969 -5.94,10.937 -2.58,2.93 -5.94,4.411 -10.08,4.411 -4.18,0 -7.58,-1.481 -10.2,-4.411 -2.65,-2.968 -4.68,-6.597 -6.13,-10.937 -1.44,-4.371 -2.42,-9.063 -2.93,-14.063 -0.51,-5.039 -0.78,-9.648 -0.78,-13.789 0,-4.3 0.27,-8.98 0.78,-14.058 0.51,-5.082 1.49,-9.852 2.93,-14.18 1.45,-4.34 3.48,-7.973 6.13,-10.941 2.62,-2.969 6.02,-4.41 10.2,-4.41 4.14,0 7.5,1.441 10.08,4.41 2.58,2.968 4.57,6.601 5.94,10.941 1.4,4.328 2.34,9.098 2.85,14.18 0.5,5.078 0.74,9.758 0.74,14.058 z m 32.46,0 c 0,-9.449 -0.94,-18.437 -2.81,-26.988 -1.88,-8.562 -4.92,-16.101 -9.07,-22.582 -4.14,-6.488 -9.53,-11.641 -16.13,-15.469 -6.6,-3.832 -14.65,-5.742 -24.06,-5.742 -9.45,0 -17.5,1.91 -24.18,5.742 -6.68,3.828 -12.11,8.981 -16.33,15.469 -4.22,6.481 -7.26,14.02 -9.14,22.582 -1.87,8.551 -2.85,17.539 -2.85,26.988 0,9.411 0.98,18.403 2.85,26.871 1.88,8.52 4.92,15.942 9.14,22.309 4.22,6.332 9.65,11.41 16.33,15.191 6.68,3.75 14.73,5.668 24.18,5.668 9.41,0 17.46,-1.918 24.06,-5.668 6.6,-3.781 11.99,-8.859 16.13,-15.191 4.15,-6.367 7.19,-13.789 9.07,-22.309 1.87,-8.468 2.81,-17.46 2.81,-26.871" />
          <path d="m 1015.9,243.09 v 68 l -17.271,-13.32 -11.359,15.589 30.46,22.34 h 20.04 V 243.09 h -21.87" />
          <path d="m 955.59,289.648 c 0,2.891 -0.199,6.051 -0.512,9.571 -0.387,3.48 -1.019,6.722 -1.988,9.73 -0.942,3 -2.309,5.539 -4.11,7.571 -1.789,2.07 -4.14,3.089 -6.992,3.089 -2.886,0 -5.226,-1.019 -7.066,-3.089 -1.832,-2.032 -3.242,-4.571 -4.262,-7.571 -1.012,-3.008 -1.68,-6.25 -2.031,-9.73 -0.348,-3.52 -0.508,-6.68 -0.508,-9.571 0,-2.929 0.16,-6.207 0.508,-9.726 0.351,-3.551 1.019,-6.801 2.031,-9.801 1.02,-3.012 2.43,-5.551 4.262,-7.582 1.84,-2.07 4.18,-3.09 7.066,-3.09 2.852,0 5.203,1.02 6.992,3.09 1.801,2.031 3.168,4.57 4.11,7.582 0.969,3 1.601,6.25 1.988,9.801 0.313,3.519 0.512,6.797 0.512,9.726 z m 22.5,0 c 0,-6.527 -0.668,-12.769 -1.961,-18.707 -1.328,-5.902 -3.399,-11.14 -6.289,-15.632 -2.891,-4.489 -6.602,-8.039 -11.211,-10.7 -4.57,-2.66 -10.109,-4.019 -16.641,-4.019 -6.558,0 -12.148,1.359 -16.758,4.019 -4.609,2.661 -8.39,6.211 -11.32,10.7 -2.93,4.492 -5.039,9.73 -6.332,15.632 -1.328,5.938 -1.957,12.18 -1.957,18.707 0,6.563 0.629,12.774 1.957,18.633 1.293,5.899 3.402,11.059 6.332,15.469 2.93,4.371 6.711,7.93 11.32,10.512 4.61,2.617 10.2,3.937 16.758,3.937 6.532,0 12.071,-1.32 16.641,-3.937 4.609,-2.582 8.32,-6.141 11.211,-10.512 2.89,-4.41 4.961,-9.57 6.289,-15.469 1.293,-5.859 1.961,-12.07 1.961,-18.633" />
          <path d="m 1287.77,124.141 v 68.007 l -17.26,-13.32 -11.37,15.551 30.47,22.383 h 20 v -92.621 h -21.84" />
          <path d="m 1227.46,170.699 c 0,2.891 -0.19,6.063 -0.55,9.571 -0.35,3.48 -0.97,6.718 -1.95,9.73 -0.98,3.012 -2.34,5.551 -4.1,7.578 -1.8,2.07 -4.14,3.082 -7.03,3.082 -2.85,0 -5.24,-1.012 -7.03,-3.082 -1.84,-2.027 -3.28,-4.566 -4.26,-7.578 -1.02,-3.012 -1.68,-6.25 -2.03,-9.73 -0.35,-3.508 -0.55,-6.68 -0.55,-9.571 0,-2.969 0.2,-6.211 0.55,-9.719 0.35,-3.558 1.01,-6.8 2.03,-9.851 0.98,-3.008 2.42,-5.508 4.26,-7.578 1.79,-2.031 4.18,-3.039 7.03,-3.039 2.89,0 5.23,1.008 7.03,3.039 1.76,2.07 3.12,4.57 4.1,7.578 0.98,3.051 1.6,6.293 1.95,9.851 0.36,3.508 0.55,6.75 0.55,9.719 z m 22.5,0 c 0,-6.519 -0.66,-12.769 -1.99,-18.711 -1.29,-5.937 -3.4,-11.129 -6.25,-15.617 -2.89,-4.492 -6.6,-8.09 -11.21,-10.75 -4.57,-2.652 -10.12,-3.941 -16.68,-3.941 -6.53,0 -12.11,1.289 -16.72,3.941 -4.65,2.66 -8.4,6.258 -11.33,10.75 -2.93,4.488 -5.04,9.68 -6.33,15.617 -1.33,5.942 -1.99,12.192 -1.99,18.711 0,6.531 0.66,12.781 1.99,18.641 1.29,5.89 3.4,11.051 6.33,15.43 2.93,4.41 6.68,7.929 11.33,10.539 4.61,2.621 10.19,3.91 16.72,3.91 6.56,0 12.11,-1.289 16.68,-3.91 4.61,-2.61 8.32,-6.129 11.21,-10.539 2.85,-4.379 4.96,-9.54 6.25,-15.43 1.33,-5.86 1.99,-12.11 1.99,-18.641" />
          <path d="m 1661.02,308.359 c 0,4.141 -0.24,8.75 -0.75,13.789 -0.5,5 -1.44,9.692 -2.85,14.063 -1.37,4.34 -3.36,7.969 -5.94,10.937 -2.57,2.93 -5.93,4.411 -10.07,4.411 -4.14,0 -7.58,-1.481 -10.2,-4.411 -2.66,-2.968 -4.69,-6.597 -6.13,-10.937 -1.45,-4.371 -2.42,-9.063 -2.93,-14.063 -0.51,-5.039 -0.74,-9.648 -0.74,-13.789 0,-4.3 0.23,-8.98 0.74,-14.058 0.51,-5.082 1.48,-9.852 2.93,-14.18 1.44,-4.34 3.47,-7.973 6.13,-10.941 2.62,-2.969 6.06,-4.41 10.2,-4.41 4.14,0 7.5,1.441 10.07,4.41 2.58,2.968 4.57,6.601 5.94,10.941 1.41,4.328 2.35,9.098 2.85,14.18 0.51,5.078 0.75,9.758 0.75,14.058 z m 32.5,0 c 0,-9.449 -0.98,-18.437 -2.86,-26.988 -1.87,-8.562 -4.92,-16.101 -9.06,-22.582 -4.14,-6.488 -9.53,-11.641 -16.13,-15.469 -6.6,-3.832 -14.61,-5.742 -24.06,-5.742 -9.46,0 -17.5,1.91 -24.18,5.742 -6.64,3.828 -12.11,8.981 -16.33,15.469 -4.22,6.481 -7.27,14.02 -9.14,22.582 -1.88,8.551 -2.85,17.539 -2.85,26.988 0,9.411 0.97,18.403 2.85,26.871 1.87,8.52 4.92,15.942 9.14,22.309 4.22,6.332 9.69,11.41 16.33,15.191 6.68,3.75 14.72,5.668 24.18,5.668 9.45,0 17.46,-1.918 24.06,-5.668 6.6,-3.781 11.99,-8.859 16.13,-15.191 4.14,-6.367 7.19,-13.789 9.06,-22.309 1.88,-8.468 2.86,-17.46 2.86,-26.871" />
          <path d="m 1600.16,1210.51 c -30.82,150.58 -164.93,259.88 -318.87,259.88 -23.44,0 -46.49,-2.66 -68.95,-7.5 -37.42,219.49 -228.86,387.15 -458.86,387.15 -227.859,0 -417.859,-164.57 -457.742,-381.06 C 130.16,1453.91 0,1314.38 0,1144.92 0,965.469 146.02,819.488 325.469,819.488 h 486.953 c 24.848,0 45,20.121 45,45 0,24.852 -20.152,45 -45,45 H 325.469 C 195.621,909.488 90,1015.12 90,1144.92 c 0,129.85 105.621,235.47 235.469,235.47 47.191,0 92.691,-13.87 131.601,-40.16 20.629,-13.9 48.59,-8.51 62.5,12.07 13.91,20.59 8.481,48.6 -12.109,62.5 -36.762,24.85 -77.813,41.45 -120.902,49.65 36.761,168.79 187.269,295.59 366.921,295.59 191.399,0 349.68,-143.91 372.61,-329.18 -12.07,-6.56 -23.86,-13.75 -35.15,-21.91 -20.16,-14.54 -24.69,-42.66 -10.16,-62.82 14.57,-20.15 42.7,-24.68 62.85,-10.15 40.24,29.06 87.85,44.41 137.66,44.41 111.41,0 208.4,-79.02 230.66,-187.97 4.38,-21.29 23.13,-35.97 44.07,-35.97 2.96,0 6.01,0.31 9.06,0.93 24.33,4.96 40.04,28.75 35.08,53.13" />
        </g>
      </g>
    </svg>
  );
}

function NavBar() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Si el usuario está cerca del final de la página, activar 'contact'
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 90;

      if (isAtBottom) {
        setActive("contact");
        return;
      }

      const sections = ["hero", "about", "projects", "experience", "skills", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 220) {
            setActive(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleCopyEmail = () => {
    const email = "archundia.cr4@gmail.com";
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email);
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const links = [
    { id: "hero", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "projects", label: "PROJECTS" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "skills", label: "SKILLS" },
    { id: "contact", label: "CONTACT" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-[#050505ee] backdrop-blur-md border-b border-[#00bfff20] shadow-[0_4px_20px_rgba(0,0,0,0.8)]"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-3.5 flex items-center justify-between gap-4">
        {/* Brand */}
        <a
          href="#hero"
          className="font-display text-sm font-bold text-[#00ff41] text-glow-green tracking-widest flex items-center gap-3 group"
        >
          <div className="relative flex items-center justify-center">
            <div className="absolute -inset-1 rounded-full bg-[#00ff4140] blur-sm group-hover:bg-[#00ff4170] transition-all duration-300" />
            <img
              src="/logo.png"
              alt="ArchundiaXP Logo"
              className="relative w-8 h-8 rounded-full object-cover border border-[#00ff4180] group-hover:scale-105 group-hover:border-[#00ff41] shadow-[0_0_10px_#00ff4150] transition-all duration-300"
            />
          </div>
          <span className="tracking-widest">CR_SYSTEM</span>
        </a>

        {/* Section Links */}
        <div className="hidden md:flex gap-6 items-center">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`font-mono text-xs tracking-widest transition-all duration-200 ${active === l.id
                ? "text-[#00bfff] text-glow-blue font-bold"
                : "text-[#e8eaf680] hover:text-[#e8eaf6]"
                }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Action & Social Icons */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/carlos-ramos-archundia"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn - Carlos Ramos"
            aria-label="LinkedIn"
            className="p-2 rounded bg-[#111118] border border-[#00bfff30] text-[#00bfff] hover:text-[#e8eaf6] hover:border-[#00bfff] hover:shadow-[0_0_10px_#00bfff60] hover:scale-105 transition-all duration-200 flex items-center justify-center"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/ArchundiaXP"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub - ArchundiaXP"
            aria-label="GitHub"
            className="p-2 rounded bg-[#111118] border border-[#e8eaf630] text-[#e8eaf6] hover:text-[#00ff41] hover:border-[#00ff41] hover:shadow-[0_0_10px_#00ff4160] hover:scale-105 transition-all duration-200 flex items-center justify-center"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
          </a>

          {/* Hack The Box */}
          <a
            href="https://profile.hackthebox.com/profile/019f5c9c-2384-72f2-adaf-8388db3b0f9c?utm_medium=copy_url"
            target="_blank"
            rel="noopener noreferrer"
            title="Hack The Box Profile"
            aria-label="Hack The Box"
            className="p-2 rounded bg-[#111118] border border-[#00ff4130] text-[#9fef00] hover:text-[#9fef00] hover:border-[#9fef00] hover:shadow-[0_0_10px_#9fef0060] hover:scale-105 transition-all duration-200 flex items-center justify-center"
          >
            <HackTheBoxIcon className="w-4 h-4" />
          </a>

          {/* TryHackMe */}
          <a
            href="https://tryhackme.com/p/Archundia"
            target="_blank"
            rel="noopener noreferrer"
            title="TryHackMe Profile"
            aria-label="TryHackMe"
            className="p-2 rounded bg-[#111118] border border-[#ff003c30] text-[#ff003c] hover:text-[#ff3366] hover:border-[#ff003c] hover:shadow-[0_0_10px_#ff003c60] hover:scale-105 transition-all duration-200 flex items-center justify-center"
          >
            <TryHackMeIcon className="w-4.5 h-3.5" />
          </a>

          {/* Email Copy Button */}
          <div className="relative">
            <button
              onClick={handleCopyEmail}
              title="Copiar correo: archundia.cr4@gmail.com"
              aria-label="Copiar correo"
              className={`p-2 rounded bg-[#111118] border transition-all duration-200 hover:scale-105 cursor-pointer ${copied
                ? "border-[#00ff41] text-[#00ff41] shadow-[0_0_12px_#00ff4180]"
                : "border-[#bf00ff40] text-[#bf00ff] hover:text-[#e8eaf6] hover:border-[#bf00ff] hover:shadow-[0_0_10px_#bf00ff60]"
                }`}
            >
              {copied ? (
                <svg
                  className="w-4 h-4 text-[#00ff41]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              )}
            </button>

            {/* Notification Badge / Tooltip */}
            {copied && (
              <div className="absolute top-full mt-2 right-0 bg-[#050505] border border-[#00ff41] px-2.5 py-1 text-[11px] font-mono text-[#00ff41] text-glow-green tracking-widest whitespace-nowrap shadow-[0_0_15px_#00ff4170] z-50 animate-pulse">
                &gt; CORREO COPIADO &lt;
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

/* =========================================================================
   PURE GRAPHICAL HACKER HUD & AMBIENT ANIMATIONS (ZERO TERMINALS / NO TEXT)
   ========================================================================= */



// 2. About Section (Left Side): Cybernetic Neural Mesh & Node Constellation
function HackerNeuralMesh() {
  return (
    <div className="absolute top-1/2 -translate-y-1/2 left-2 md:left-6 lg:left-10 pointer-events-none opacity-25 lg:opacity-35 z-0 hidden md:block">
      <div className="relative w-64 h-64 md:w-76 md:h-76 flex items-center justify-center">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 220 220">
          <circle cx="110" cy="110" r="85" fill="none" stroke="#00bfff" strokeWidth="1" strokeDasharray="16 20" className="animate-spin-slow origin-center" />
          <circle cx="110" cy="110" r="60" fill="none" stroke="#00ff41" strokeWidth="1" strokeDasharray="8 12" className="animate-spin-reverse-slow origin-center" opacity="0.7" />

          <line x1="45" y1="55" x2="110" y2="110" stroke="#00bfff" strokeWidth="1.5" strokeDasharray="4 4" className="animate-circuit-flow" />
          <line x1="175" y1="65" x2="110" y2="110" stroke="#00ff41" strokeWidth="1.5" strokeDasharray="4 4" className="animate-circuit-flow" />
          <line x1="165" y1="165" x2="110" y2="110" stroke="#bf00ff" strokeWidth="1.5" strokeDasharray="4 4" className="animate-circuit-flow" />
          <line x1="55" y1="155" x2="110" y2="110" stroke="#ff003c" strokeWidth="1.5" strokeDasharray="4 4" className="animate-circuit-flow" />
          <line x1="45" y1="55" x2="175" y2="65" stroke="#00bfff" strokeWidth="1" opacity="0.3" />
          <line x1="175" y1="65" x2="165" y2="165" stroke="#00ff41" strokeWidth="1" opacity="0.3" />
          <line x1="165" y1="165" x2="55" y2="155" stroke="#bf00ff" strokeWidth="1" opacity="0.3" />
          <line x1="55" y1="155" x2="45" y2="55" stroke="#ff003c" strokeWidth="1" opacity="0.3" />

          <circle cx="45" cy="55" r="5" fill="#00bfff" className="animate-pulse shadow-[0_0_8px_#00bfff]" />
          <circle cx="175" cy="65" r="5" fill="#00ff41" className="animate-pulse shadow-[0_0_8px_#00ff41]" />
          <circle cx="165" cy="165" r="5" fill="#bf00ff" className="animate-pulse shadow-[0_0_8px_#bf00ff]" />
          <circle cx="55" cy="155" r="5" fill="#ff003c" className="animate-pulse shadow-[0_0_8px_#ff003c]" />

          <circle cx="110" cy="110" r="8" fill="#00ff41" className="animate-hacker-pulse shadow-[0_0_12px_#00ff41]" />
          <circle cx="110" cy="110" r="16" fill="none" stroke="#00ff41" strokeWidth="1.5" className="animate-ping origin-center opacity-40" />
        </svg>
      </div>
    </div>
  );
}

// 3. Projects Section (Right Side): PCB Circuit Board Traces & Microchip Core
function HackerCircuitCore() {
  return (
    <div className="absolute top-1/4 right-2 md:right-6 lg:right-10 pointer-events-none opacity-25 lg:opacity-35 z-0 hidden md:block">
      <div className="relative w-64 h-64 md:w-72 md:h-72 flex items-center justify-center">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
          <path d="M10,40 L60,40 L90,70 L90,90" fill="none" stroke="#00ff41" strokeWidth="1.5" strokeDasharray="8 6" className="animate-circuit-flow" />
          <circle cx="10" cy="40" r="3" fill="#00ff41" />

          <path d="M190,40 L140,40 L110,70 L110,90" fill="none" stroke="#00bfff" strokeWidth="1.5" strokeDasharray="8 6" className="animate-circuit-flow" />
          <circle cx="190" cy="40" r="3" fill="#00bfff" />

          <path d="M190,160 L140,160 L110,130 L110,110" fill="none" stroke="#bf00ff" strokeWidth="1.5" strokeDasharray="8 6" className="animate-circuit-flow" />
          <circle cx="190" cy="160" r="3" fill="#bf00ff" />

          <path d="M10,160 L60,160 L90,130 L90,110" fill="none" stroke="#ff003c" strokeWidth="1.5" strokeDasharray="8 6" className="animate-circuit-flow" />
          <circle cx="10" cy="160" r="3" fill="#ff003c" />

          <polygon points="100,25 165,62 165,138 100,175 35,138 35,62" fill="none" stroke="#00ff41" strokeWidth="1.2" strokeDasharray="12 12" className="animate-spin-slow origin-center" />

          <rect x="55" y="36" width="8" height="8" fill="#00ff4160" />
          <rect x="137" y="36" width="8" height="8" fill="#00bfff60" />
          <rect x="137" y="156" width="8" height="8" fill="#bf00ff60" />
          <rect x="55" y="156" width="8" height="8" fill="#ff003c60" />
        </svg>

        <div className="relative w-16 h-16 bg-[#0a0a0f] border-2 border-[#00ff41] flex items-center justify-center shadow-[0_0_15px_#00ff4140] animate-hacker-pulse">
          <div className="w-8 h-8 border border-[#00bfff] rotate-45 flex items-center justify-center">
            <div className="w-3 h-3 bg-[#00ff41] rotate-45 shadow-[0_0_8px_#00ff41]" />
          </div>
          <div className="absolute -top-1.5 left-2 right-2 flex justify-between">
            <span className="w-1 h-1.5 bg-[#00ff41]" />
            <span className="w-1 h-1.5 bg-[#00ff41]" />
            <span className="w-1 h-1.5 bg-[#00ff41]" />
          </div>
          <div className="absolute -bottom-1.5 left-2 right-2 flex justify-between">
            <span className="w-1 h-1.5 bg-[#00ff41]" />
            <span className="w-1 h-1.5 bg-[#00ff41]" />
            <span className="w-1 h-1.5 bg-[#00ff41]" />
          </div>
        </div>
      </div>
    </div>
  );
}

// 4. Experience Section (Left Side): Digital Signal Oscilloscope & Frequency Waveform
function HackerOscilloscopeWave() {
  return (
    <div className="absolute top-1/2 -translate-y-1/2 left-2 md:left-6 lg:left-8 pointer-events-none opacity-25 lg:opacity-35 z-0 hidden md:block">
      <div className="relative w-64 h-64 md:w-76 md:h-76 flex items-center justify-center">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="88" fill="none" stroke="#ff003c" strokeWidth="1.5" strokeDasharray="30 15 5 15" className="animate-spin-slow origin-center" />
          <circle cx="100" cy="100" r="72" fill="none" stroke="#bf00ff" strokeWidth="1" strokeDasharray="6 6" className="animate-spin-reverse-slow origin-center" opacity="0.6" />

          <line x1="100" y1="20" x2="100" y2="180" stroke="#ff003c" strokeWidth="1" strokeDasharray="2 4" opacity="0.4" />
          <line x1="20" y1="100" x2="180" y2="100" stroke="#ff003c" strokeWidth="1" strokeDasharray="2 4" opacity="0.4" />

          <path
            d="M 30,100 Q 50,40 70,100 T 110,100 T 150,100 T 170,100"
            fill="none"
            stroke="#ff003c"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="drop-shadow-[0_0_8px_#ff003c]"
          />
          <path
            d="M 30,100 Q 50,140 70,100 T 110,100 T 150,100 T 170,100"
            fill="none"
            stroke="#00bfff"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.7"
          />
        </svg>

        <div className="flex items-center gap-1.5 h-16">
          <div className="w-1.5 bg-[#ff003c] rounded-full h-12 animate-wave-1 shadow-[0_0_6px_#ff003c]" />
          <div className="w-1.5 bg-[#bf00ff] rounded-full h-12 animate-wave-2 shadow-[0_0_6px_#bf00ff]" />
          <div className="w-1.5 bg-[#00bfff] rounded-full h-12 animate-wave-3 shadow-[0_0_6px_#00bfff]" />
          <div className="w-1.5 bg-[#00ff41] rounded-full h-12 animate-wave-1 shadow-[0_0_6px_#00ff41]" />
          <div className="w-1.5 bg-[#ff003c] rounded-full h-12 animate-wave-2 shadow-[0_0_6px_#ff003c]" />
          <div className="w-1.5 bg-[#bf00ff] rounded-full h-12 animate-wave-3 shadow-[0_0_6px_#bf00ff]" />
          <div className="w-1.5 bg-[#00bfff] rounded-full h-12 animate-wave-1 shadow-[0_0_6px_#00bfff]" />
        </div>
      </div>
    </div>
  );
}

// 5. Skills Section (Right Side): Holographic Polyhedral Cipher Core & Gyro Rings
function HackerHoloShield() {
  return (
    <div className="absolute top-1/3 right-2 md:right-6 lg:right-10 pointer-events-none opacity-25 lg:opacity-35 z-0 hidden md:block">
      <div className="relative w-64 h-64 md:w-76 md:h-76 flex items-center justify-center">
        <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 200 200">
          <polygon points="100,10 190,100 100,190 10,100" fill="none" stroke="#bf00ff" strokeWidth="2" strokeDasharray="30 15" />
          <polygon points="100,25 175,100 100,175 25,100" fill="none" stroke="#00bfff" strokeWidth="1" strokeDasharray="6 6" opacity="0.6" />
        </svg>

        <svg className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] animate-spin-reverse-medium" viewBox="0 0 160 160">
          <polygon points="80,10 145,45 145,115 80,150 15,115 15,45" fill="none" stroke="#00ff41" strokeWidth="1.5" strokeDasharray="16 8" />
        </svg>

        <div className="relative flex items-center justify-center animate-hacker-pulse">
          <div className="w-12 h-12 border-2 border-[#bf00ff] rotate-45 flex items-center justify-center bg-[#bf00ff15] shadow-[0_0_15px_#bf00ff40]">
            <div className="w-5 h-5 bg-[#00ff41] rotate-45 shadow-[0_0_10px_#00ff41]" />
          </div>
        </div>

        <div className="absolute inset-0 animate-spin-medium flex items-center justify-between">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00ff41] shadow-[0_0_8px_#00ff41]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#bf00ff] shadow-[0_0_8px_#bf00ff]" />
        </div>
      </div>
    </div>
  );
}

// 6. Contact Section (Left Side): Quantum Radio Beacon & Expanding Wavefronts
function HackerQuantumBeacon() {
  return (
    <div className="absolute top-1/2 -translate-y-1/2 left-2 md:left-6 lg:left-10 pointer-events-none opacity-25 lg:opacity-35 z-0 hidden md:block">
      <div className="relative w-64 h-64 md:w-76 md:h-76 flex items-center justify-center">
        <div className="absolute w-52 h-52 rounded-full border border-[#00ff41] animate-hacker-pulse" />
        <div className="absolute w-36 h-36 rounded-full border border-[#00bfff] animate-hacker-pulse" style={{ animationDelay: "0.8s" }} />
        <div className="absolute w-20 h-20 rounded-full border border-[#ff003c] animate-hacker-pulse" style={{ animationDelay: "1.6s" }} />

        <svg className="absolute inset-0 w-full h-full animate-spin-medium" viewBox="0 0 180 180">
          <circle cx="90" cy="90" r="82" fill="none" stroke="#00ff41" strokeWidth="1.5" strokeDasharray="20 40" opacity="0.7" />
          <circle cx="90" cy="8" r="5" fill="#00ff41" className="shadow-[0_0_12px_#00ff41]" />
        </svg>

        <svg className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] animate-spin-reverse-slow" viewBox="0 0 150 150">
          <circle cx="75" cy="75" r="65" fill="none" stroke="#00bfff" strokeWidth="1" strokeDasharray="10 20" opacity="0.6" />
          <circle cx="75" cy="10" r="4" fill="#00bfff" className="shadow-[0_0_8px_#00bfff]" />
        </svg>

        <div className="relative flex items-center justify-center">
          <div className="w-8 h-8 bg-[#00ff41] rotate-45 flex items-center justify-center shadow-[0_0_15px_#00ff41] animate-hacker-pulse">
            <div className="w-3 h-3 bg-[#050505] rotate-45" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  const [typed, setTyped] = useState("");
  const fullText = "Penetration Tester & Incident Response";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTyped(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 cyber-grid opacity-60" />

      {/* Corner decorations */}
      <div className="absolute top-24 left-8 w-16 h-16 border-t-2 border-l-2 border-[#00ff41] opacity-60" />
      <div className="absolute top-24 right-8 w-16 h-16 border-t-2 border-r-2 border-[#00bfff] opacity-60" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-[#ff003c] opacity-60" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-[#bf00ff] opacity-60" />

      {/* Vertical accent lines */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#00ff4130] to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#ff003c30] to-transparent" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Status line */}
        <div className="font-mono text-xs text-[#00ff41] mb-6 tracking-widest opacity-80">
          <span className="text-[#e8eaf640]">// </span>
          SYSTEM ONLINE
          <span className="inline-block w-2 h-3 bg-[#00ff41] ml-2 align-middle" style={{ animation: "blink 1s step-end infinite" }} />
        </div>

        {/* Name */}
        <h1
          className="font-display text-5xl md:text-7xl font-black tracking-widest mb-2 glitch-text text-[#e8eaf6]"
          data-text="CARLOS RAMOS"
        >
          CARLOS RAMOS
        </h1>

        {/* Horizontal rule */}
        <div className="flex items-center gap-3 my-6 justify-center">
          <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-[#ff003c]" />
          <div className="w-2 h-2 rotate-45 bg-[#ff003c]" />
          <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-[#ff003c]" />
        </div>

        {/* Role */}
        <p className="font-display text-lg md:text-2xl font-medium text-[#00bfff] text-glow-blue tracking-widest terminal-cursor">
          {typed}
        </p>

        {/* Stats row */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-12">
          {[
            { val: "2+", label: "YEARS EXP", color: "#00ff41" },
            { val: "20+", label: "LAB TARGETS", color: "#00bfff" },
            { val: "100%", label: "ETHICAL COMMITMENT", color: "#ff003c" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="font-display text-3xl font-black"
                style={{ color: s.color, textShadow: `0 0 15px ${s.color}` }}
              >
                {s.val}
              </div>
              <div className="font-mono text-xs text-[#e8eaf650] tracking-widest mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="font-mono text-sm px-8 py-3 bg-[#ff003c] text-[#050505] font-bold tracking-widest hover:shadow-[0_0_20px_#ff003c] transition-all duration-300 hover:scale-105"
          >
            VIEW WORK
          </a>
          <a
            href="#about"
            className="font-mono text-sm px-8 py-3 border border-[#00bfff] text-[#00bfff] tracking-widest hover:bg-[#00bfff15] hover:shadow-[0_0_20px_#00bfff40] transition-all duration-300"
          >
            ABOUT ME
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050505] to-transparent" />
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-20" />
      {/* Graphical Hacker Background: Cybernetic Neural Mesh (Left) */}
      <HackerNeuralMesh />
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="mb-16">
          <div className="font-mono text-xs text-[#00ff41] tracking-widest mb-2 opacity-70">
            // SECTION_02
          </div>
          <h2 className="font-display text-4xl font-black text-[#e8eaf6] tracking-widest">
            ABOUT<span className="text-[#00bfff] text-glow-blue">_</span>ME
          </h2>
          <div className="mt-3 h-px w-32 bg-gradient-to-r from-[#00bfff] to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Photo / visual placeholder */}
          <div className="lg:col-span-2">
            <div className="relative aspect-square max-w-sm mx-auto lg:mx-0 neon-border-blue bg-[#111118] overflow-hidden group">
              {/* Grid & scanlines */}
              <div className="absolute inset-0 cyber-grid opacity-30" />
              
              {/* Logo display */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="relative flex items-center justify-center">
                  <div className="w-44 h-44 sm:w-52 sm:h-52 border border-[#00bfff40] rounded-full animate-spin-slow" />
                  <div className="absolute w-36 h-36 sm:w-44 sm:h-44 border border-[#00ff4130] rounded-full animate-spin-reverse-slow" />
                  <img
                    src="/logo.png"
                    alt="Carlos Ramos - ArchundiaXP"
                    className="absolute w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-2 border-[#00bfff80] shadow-[0_0_25px_#00bfff60] group-hover:scale-105 group-hover:border-[#00ff41] group-hover:shadow-[0_0_35px_#00ff4180] transition-all duration-500"
                  />
                </div>
              </div>

              {/* Corner marks */}
              <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#00ff41]" />
              <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[#ff003c]" />
              <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-[#bf00ff]" />
              <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#00bfff]" />

              {/* Status badge */}
              <div className="absolute bottom-5 left-0 right-0 flex justify-center">
                <div className="font-mono text-xs px-3 py-1 bg-[#00ff4120] border border-[#00ff41] text-[#00ff41] tracking-widest shadow-[0_0_10px_#00ff4140]">
                  ● AVAILABLE FOR HIRE
                </div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-3 space-y-6">
            <div className="neon-border-purple bg-[#111118] p-6">
              <div className="font-mono text-xs text-[#bf00ff] mb-3 tracking-widest">
                &gt; cat about.txt
              </div>
              <p className="font-body text-lg text-[#e8eaf6cc] leading-relaxed">
                Hi, my name is Carlos. I hold a degree in Computer Science from UNAM and specialize in AI model
                development and offensive cybersecurity. For years, I have been passionate about the
                cybersecurity field, with a particular focus on ethical hacking. I truly enjoy breaking
                down the logic behind systems to test and evaluate how secure they are for people and
                organizations. I am constantly looking for new challenges that expand my technical expertise.
              </p>
            </div>

            <div className="neon-border-green bg-[#111118] p-6">
              <div className="font-mono text-xs text-[#00ff41] mb-3 tracking-widest">
                &gt; whoami --verbose
              </div>
              <p className="font-body text-lg text-[#e8eaf6cc] leading-relaxed">
                I am driven by combining technical knowledge and critical thinking to
                identify security vulnerabilities. I have hands-on experience conducting
                security audits under PTES and OWASP methodologies, designing Zero Trust
                architectures aligned with the COBIT framework, and developing Artificial
                Neural Networks (RNA) for predictive anomaly detection in event logs.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "LOCATION", value: "Latam / México City" },
                { label: "AVAILABILITY", value: "Immediate" },
                { label: "LANGUAGES", value: "ES / EN" },
                { label: "CERTIFICATIONS", value: "In Progress" },
              ].map((item) => (
                <div key={item.label} className="bg-[#0d0d0d] border border-[#e8eaf610] p-4">
                  <div className="font-mono text-xs text-[#e8eaf640] tracking-widest mb-1">
                    {item.label}
                  </div>
                  <div className="font-body font-semibold text-[#e8eaf6]">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [expanded, setExpanded] = useState<string | null>("ai-incidents");

  const projects = [
    {
      id: "ai-incidents",
      tag: "AI / INCIDENT RESPONSE & CYBERSECURITY",
      title: "AI Incident Automation & Threat Detection",
      subtitle: "Artificial Neural Network (ANN) in Python for Predictive Windows Event Log Analysis",
      color: "#00ff41",
      border: "neon-border-green",
      year: "2026 — PRESENT",
      status: "IN PRODUCTION",
      tech: [
        "Python",
        "Artificial Neural Networks (ANN)",
        "Windows Event Logs",
        "Predictive Analytics",
        "Machine Learning",
        "Anomaly Detection",
      ],
      summary:
        "Designed and implemented an Artificial Neural Network (ANN) in Python for predictive analysis of Windows Event Logs, achieving automated identification and classification of anomalies, attack patterns, and security incidents in real time.",
      details: [
        "Engineered and trained an Artificial Neural Network (ANN) model in Python specifically tailored for security telemetry analysis.",
        "Conducted predictive analysis on Windows Event Logs for automated cross-correlation of threat intelligence data.",
        "Enabled real-time, automated detection of system anomalies, privilege escalations, and attack patterns.",
        "Significantly reduced incident response times and strengthened proactive defense against offensive threats.",
      ],
      metrics: [
        { label: "MODEL", val: "Python ANN" },
        { label: "TELEMETRY", val: "Event Logs" },
        { label: "DETECTION", val: "Real-Time AI" },
      ],
    },
    {
      id: "fca-web-system",
      tag: "SOFTWARE ENGINEERING / BACKEND",
      title: "FCA Web Management System (UNAM)",
      subtitle: "Facility & Space Management System under UP / RUP Methodology",
      color: "#00bfff",
      border: "neon-border-blue",
      year: "2025",
      status: "MVP DELIVERED",
      tech: [
        "Backend Development",
        "UP / RUP Methodology",
        "UI/UX Wireframes",
        "Requirements Engineering",
        "Databases / SQL",
        "Software Architecture",
      ],
      summary:
        "Architected and engineered the backend infrastructure for the Facility Management System at UNAM's Faculty of Accounting and Administration (FCA), managing the complete software lifecycle under the UP/RUP methodology for the successful delivery of a Minimum Viable Product (MVP).",
      details: [
        "Gathered, analyzed, and specified comprehensive functional and non-functional system requirements.",
        "Designed interactive UI wireframes, architecture mockups, and workflows to optimize administrative productivity.",
        "Coordinated the software development lifecycle under the Unified Process / Rational Unified Process (UP/RUP) framework.",
        "Engineered backend business logic and database schemas ensuring 100% milestone compliance for the MVP release.",
      ],
      metrics: [
        { label: "METHODOLOGY", val: "UP / RUP" },
        { label: "DELIVERY", val: "MVP 100%" },
        { label: "INSTITUTION", val: "FCA UNAM" },
      ],
    },
    {
      id: "pumahat-project",
      tag: "OFFENSIVE SECURITY / TECHNICAL TRAINING",
      title: "PumaHat (Faculty of Engineering - UNAM)",
      subtitle: "Technical Cybersecurity Instructor & Practical Lab Architect",
      color: "#ff003c",
      border: "neon-border-red",
      year: "2024 — 2026",
      status: "ACTIVE",
      tech: [
        "Docker",
        "PTES",
        "OWASP Top 10",
        "Web Pentesting",
        "Privilege Escalation",
        "Linux & Windows",
        "Applied Cryptography",
      ],
      summary:
        "Delivered advanced technical training and hands-on guidance at PumaHat (UNAM Faculty of Engineering), mentoring over 30 students in penetration testing under PTES/OWASP standards and engineering containerized Docker environments for high-fidelity attack simulations.",
      details: [
        "Technically trained 30+ students in executing structured penetration tests following PTES and OWASP Top 10 standards.",
        "Designed, deployed, and maintained hands-on virtual lab environments using Docker containers to simulate real-world attack vectors.",
        "Delivered advanced offensive security workshops focused on web exploitation and vertical/horizontal privilege escalation across Linux and Windows.",
        "Translated complex network infrastructure, cryptography, and vulnerability concepts into actionable executive and technical insights.",
      ],
      metrics: [
        { label: "STUDENTS TRAINED", val: "30+" },
        { label: "STANDARDS", val: "PTES / OWASP" },
        { label: "INFRASTRUCTURE", val: "Docker Labs" },
      ],
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-[#0a0a0a] relative overflow-hidden">
      <div className="section-divider mb-0" />
      <div className="absolute inset-0 cyber-grid opacity-15" />
      {/* Graphical Hacker Background: PCB Circuit Core (Right) */}
      <HackerCircuitCore />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16">
          <div className="font-mono text-xs text-[#00ff41] tracking-widest mb-2 opacity-70">
            // SECTION_03
          </div>
          <h2 className="font-display text-4xl font-black text-[#e8eaf6] tracking-widest">
            PROJ<span className="text-[#00ff41] text-glow-green">_</span>ECTS
          </h2>
          <div className="mt-3 h-px w-32 bg-gradient-to-r from-[#00ff41] to-transparent" />
        </div>

        <div className="space-y-6">
          {projects.map((p) => (
            <div key={p.id} className={`bg-[#111118] ${p.border} overflow-hidden`}>
              {/* Project header */}
              <div
                className="p-6 cursor-pointer hover:bg-[#ffffff05] transition-colors"
                onClick={() => setExpanded(expanded === p.id ? null : p.id)}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span
                        className="font-mono text-xs px-2 py-1 tracking-widest"
                        style={{
                          color: p.color,
                          border: `1px solid ${p.color}40`,
                          background: `${p.color}10`,
                        }}
                      >
                        {p.tag}
                      </span>
                      <span className="font-mono text-xs text-[#00ff4180] tracking-widest">
                        ● {p.status}
                      </span>
                      <span className="font-mono text-xs text-[#e8eaf640]">{p.year}</span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-[#e8eaf6] tracking-widest">
                      {p.title}
                    </h3>
                    <p className="font-body text-base text-[#e8eaf680] mt-1">{p.subtitle}</p>
                  </div>
                  <div
                    className="font-mono text-xl font-bold transition-transform duration-300 mt-1 flex-shrink-0"
                    style={{
                      color: p.color,
                      transform: expanded === p.id ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    +
                  </div>
                </div>

                {/* Tech stack */}
                <div className="flex gap-2 mt-4 flex-wrap">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs px-2 py-1 bg-[#0d0d0d] border border-[#e8eaf615] text-[#e8eaf680] tracking-widest"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Expanded details */}
              <div
                style={{
                  maxHeight: expanded === p.id ? "600px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.4s ease",
                }}
              >
                <div className="px-6 pb-6 border-t border-[#ffffff10]">
                  <p className="font-body text-base text-[#e8eaf6cc] mt-5 mb-5 leading-relaxed">
                    {p.summary}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {p.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="text-center py-4 bg-[#0d0d0d]"
                        style={{ border: `1px solid ${p.color}30` }}
                      >
                        <div
                          className="font-display text-2xl font-black"
                          style={{ color: p.color, textShadow: `0 0 12px ${p.color}` }}
                        >
                          {m.val}
                        </div>
                        <div className="font-mono text-xs text-[#e8eaf640] tracking-widest mt-1">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Detail list */}
                  <ul className="space-y-2">
                    {p.details.map((d, i) => (
                      <li key={i} className="flex gap-3 font-body text-sm text-[#e8eaf6bb]">
                        <span style={{ color: p.color }} className="flex-shrink-0 font-mono">
                          ›
                        </span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const jobs = [
    {
      role: "Security Analyst / Junior Consultant",
      company: "Consultoría TI",
      period: "January 2025 — July 2025",
      type: "JANUARY 2025 — JULY 2025",
      color: "#ff003c",
      border: "neon-border-red",
      tasks: [
        "Executed grey-box security audits on internal network infrastructures and performed exhaustive corporate security policy reviews.",
        "Identified critical attack vectors with Nmap and Burp Suite, detecting misconfigurations, outdated services, and hardcoded credentials in source code.",
        "Designed a Zero Trust architecture for role-based access segregation, mitigating data exfiltration risks on a critical Windows endpoint with financial and vendor records.",
        "Designed and implemented a comprehensive external incremental backup plan, rollback strategies, and hardening policies based on the COBIT framework.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-20" />
      {/* Graphical Hacker Background: Oscilloscope Signal Waveform (Left) */}
      <HackerOscilloscopeWave />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16">
          <div className="font-mono text-xs text-[#00ff41] tracking-widest mb-2 opacity-70">
            // SECTION_04
          </div>
          <h2 className="font-display text-4xl font-black text-[#e8eaf6] tracking-widest">
            EXPER<span className="text-[#ff003c] text-glow-red">_</span>IENCE
          </h2>
          <div className="mt-3 h-px w-32 bg-gradient-to-r from-[#ff003c] to-transparent" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#ff003c60] via-[#bf00ff60] to-transparent hidden md:block" />

          <div className="space-y-8">
            {jobs.map((job, i) => (
              <div key={i} className="md:pl-20 relative">
                {/* Timeline dot */}
                <div
                  className="absolute left-6 top-6 w-4 h-4 rotate-45 bg-[#ff003c] hidden md:block"
                  style={{ boxShadow: "0 0 10px #ff003c, 0 0 20px #ff003c60" }}
                />

                <div className={`bg-[#111118] ${job.border} p-6 md:p-8`}>
                  <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                    <div>
                      <h3 className="font-display text-xl font-bold text-[#e8eaf6] tracking-widest">
                        {job.role}
                      </h3>
                      <p className="font-body text-base text-[#e8eaf680] mt-1">{job.company}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span
                        className="font-mono text-xs px-3 py-1 tracking-widest font-semibold"
                        style={{
                          color: job.color,
                          border: `1px solid ${job.color}40`,
                          background: `${job.color}10`,
                        }}
                      >
                        {job.type}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 mt-5">
                    {job.tasks.map((task, j) => (
                      <li key={j} className="flex gap-3 font-body text-base text-[#e8eaf6bb]">
                        <span className="text-[#ff003c] flex-shrink-0 font-mono">›</span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const coreCompetencies = [
    {
      name: "Web Pentesting & OWASP",
      desc: "Vulnerability analysis, grey-box audits, and OWASP Top 10 compliance testing",
      color: "#00ff41",
    },
    {
      name: "Privilege Escalation",
      desc: "Vertical and horizontal privilege escalation across Linux and Windows environments",
      color: "#ff003c",
    },
    {
      name: "Zero Trust & Hardening",
      desc: "Role-based network segregation and infrastructure hardening aligned with COBIT / COSO",
      color: "#00bfff",
    },
    {
      name: "Artificial Neural Networks (ANN)",
      desc: "Predictive anomaly detection and automated telemetry log analysis in Python",
      color: "#bf00ff",
    },
  ];

  const tools = [
    {
      name: "Kali Linux",
      role: "Offensive Security OS",
      desc: "Specialized pentesting environment and forensic toolchain",
      color: "#bf00ff",
      border: "neon-border-purple",
      tag: "OS & ENVIRONMENT",
    },
    {
      name: "Burp Suite",
      role: "Web Security & DAST",
      desc: "HTTP traffic interception, repeater analysis and vulnerability scanning",
      color: "#ff003c",
      border: "neon-border-red",
      tag: "WEB PROXY",
    },
    {
      name: "Metasploit",
      role: "Exploitation Framework",
      desc: "Automated vulnerability verification and payload generation",
      color: "#00bfff",
      border: "neon-border-blue",
      tag: "EXPLOITATION",
    },
    {
      name: "Nmap",
      role: "Network Discovery",
      desc: "Network asset mapping, port scanning, and OS/service enumeration",
      color: "#00ff41",
      border: "neon-border-green",
      tag: "RECON & ENUM",
    },
    {
      name: "Wireshark",
      role: "Traffic & Protocol Analysis",
      desc: "Deep packet inspection and forensic network traffic capture",
      color: "#00bfff",
      border: "neon-border-blue",
      tag: "PACKET ANALYSIS",
    },
    {
      name: "Docker",
      role: "Lab Infrastructure",
      desc: "Isolated virtual containers for realistic attack simulations",
      color: "#00ff41",
      border: "neon-border-green",
      tag: "VIRTUALIZATION",
    },
    {
      name: "Hydra",
      role: "Online Credential Testing",
      desc: "High-speed network login auditing and authentication testing",
      color: "#ff003c",
      border: "neon-border-red",
      tag: "AUTH AUDITING",
    },
    {
      name: "John the Ripper",
      role: "Password Hash Cracking",
      desc: "Offline cryptographic hash analysis and dictionary rule auditing",
      color: "#bf00ff",
      border: "neon-border-purple",
      tag: "PASSWORD SECURITY",
    },
  ];

  const methodologies = [
    {
      phase: "01",
      code: "PTES",
      name: "Penetration Testing Execution Standard",
      desc: "Structured workflow: Pre-engagement, Threat Modeling, Vulnerability Analysis & Exploitation",
      color: "#00bfff",
    },
    {
      phase: "02",
      code: "OWASP TOP 10",
      name: "Web Application Security Verification",
      desc: "Mitigating Broken Access Control, Injection, Cryptographic Failures & SSRF",
      color: "#00ff41",
    },
    {
      phase: "03",
      code: "COBIT / COSO",
      name: "IT Governance & Security Hardening",
      desc: "Internal control policies, organizational hardening, and disaster recovery strategies",
      color: "#ff003c",
    },
    {
      phase: "04",
      code: "ZERO TRUST",
      name: "Architecture & Role-Based Segregation",
      desc: "Least-privilege access model, endpoint isolation, and continuous identity verification",
      color: "#bf00ff",
    },
    {
      phase: "05",
      code: "UP / RUP",
      name: "Unified Software Process Lifecycle",
      desc: "Iterative architectural development from requirements gathering to MVP deployment",
      color: "#e8eaf6",
    },
  ];

  const programmingLanguages = [
    { name: "Python", type: "Security Scripting & AI / ML", color: "#00bfff" },
    { name: "SQL", type: "Database Querying & Security", color: "#00ff41" },
    { name: "C", type: "Low-Level & Memory Systems", color: "#bf00ff" },
    { name: "Java", type: "Enterprise Applications", color: "#ff003c" },
    { name: "Kotlin", type: "Mobile Architecture", color: "#00bfff" },
    { name: "Swift", type: "iOS Development & OOP", color: "#00ff41" },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-[#0a0a0a] relative overflow-hidden">
      <div className="section-divider mb-0" />
      <div className="absolute inset-0 cyber-grid opacity-15" />
      {/* Graphical Hacker Background: Holographic Polyhedral Core (Right) */}
      <HackerHoloShield />
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="font-mono text-xs text-[#00ff41] tracking-widest mb-2 opacity-70">
            // SECTION_05
          </div>
          <h2 className="font-display text-4xl font-black text-[#e8eaf6] tracking-widest">
            SK<span className="text-[#bf00ff] text-glow-purple">_</span>ILLS &amp; EXPERTISE
          </h2>
          <div className="mt-3 h-px w-32 bg-gradient-to-r from-[#bf00ff] to-transparent" />
        </div>

        {/* Top Grid: Core Competencies & Standards/Frameworks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Core Competencies */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-2 h-2 rotate-45 bg-[#bf00ff]"
                style={{ boxShadow: "0 0 8px #bf00ff" }}
              />
              <h3 className="font-display text-sm font-bold text-[#bf00ff] tracking-widest text-glow-purple">
                CORE COMPETENCIES
              </h3>
            </div>

            <div className="space-y-4">
              {coreCompetencies.map((s) => (
                <div
                  key={s.name}
                  className="bg-[#111118] p-5"
                  style={{ border: `1px solid ${s.color}40` }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-1.5 h-1.5 rotate-45 flex-shrink-0"
                      style={{ background: s.color, boxShadow: `0 0 6px ${s.color}` }}
                    />
                    <span
                      className="font-display text-sm font-bold tracking-widest"
                      style={{ color: s.color }}
                    >
                      {s.name}
                    </span>
                  </div>
                  <p className="font-body text-base text-[#e8eaf680] leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Standards & Frameworks Config */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-2 h-2 rotate-45 bg-[#ff003c]"
                style={{ boxShadow: "0 0 8px #ff003c" }}
              />
              <h3 className="font-display text-sm font-bold text-[#ff003c] tracking-widest text-glow-red">
                STANDARDS &amp; FRAMEWORKS
              </h3>
            </div>

            <div className="neon-border-red bg-[#111118] p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-[#ffffff10] pb-3">
                <span className="font-mono text-xs text-[#ff003c] tracking-widest">
                  &gt; standards_&amp;_frameworks.config
                </span>
                <span className="font-mono text-[10px] text-[#00ff41] bg-[#00ff4115] border border-[#00ff4140] px-2 py-0.5 tracking-widest">
                  ● ACTIVE STANDARDS
                </span>
              </div>

              <div className="space-y-4 pt-1">
                {methodologies.map((m) => (
                  <div
                    key={m.phase}
                    className="p-3 bg-[#0d0d0d] border border-[#e8eaf610] hover:border-[#ff003c50] transition-colors"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5 flex-wrap">
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-xs text-[#e8eaf640] font-bold">
                          {m.phase}
                        </span>
                        <span
                          className="font-mono text-xs px-2 py-0.5 tracking-widest font-bold"
                          style={{
                            color: m.color,
                            border: `1px solid ${m.color}40`,
                            background: `${m.color}10`,
                          }}
                        >
                          {m.code}
                        </span>
                      </div>
                      <span className="font-display text-xs font-semibold text-[#e8eaf6]">
                        {m.name}
                      </span>
                    </div>
                    <p className="font-body text-xs text-[#e8eaf680] leading-relaxed pl-7">
                      {m.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Security Tools & Platforms - Prominent Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div
                className="w-2 h-2 rotate-45 bg-[#00ff41]"
                style={{ boxShadow: "0 0 8px #00ff41" }}
              />
              <h3 className="font-display text-sm font-bold text-[#00ff41] tracking-widest text-glow-green">
                SECURITY TOOLS &amp; PLATFORMS
              </h3>
            </div>
            <span className="font-mono text-xs text-[#e8eaf640] tracking-widest">
              // OFFENSIVE TOOLCHAIN &amp; ARSENAL
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {tools.map((t) => (
              <div
                key={t.name}
                className={`bg-[#111118] ${t.border} p-5 hover:scale-[1.02] hover:bg-[#161622] transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className="font-mono text-[10px] px-2 py-0.5 tracking-widest"
                      style={{
                        color: t.color,
                        border: `1px solid ${t.color}40`,
                        background: `${t.color}10`,
                      }}
                    >
                      {t.tag}
                    </span>
                    <span className="w-1.5 h-1.5 rotate-45" style={{ background: t.color }} />
                  </div>
                  <h4 className="font-display text-lg font-bold text-[#e8eaf6] tracking-wide mb-1">
                    {t.name}
                  </h4>
                  <p className="font-mono text-xs mb-2.5" style={{ color: t.color }}>
                    {t.role}
                  </p>
                </div>
                <p className="font-body text-xs text-[#e8eaf670] leading-relaxed border-t border-[#ffffff08] pt-2.5">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Programming Languages - Sleek Compact Bar */}
        <div className="bg-[#111118] border border-[#00bfff30] p-6">
          <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
            <div className="flex items-center gap-3">
              <div
                className="w-2 h-2 rotate-45 bg-[#00bfff]"
                style={{ boxShadow: "0 0 8px #00bfff" }}
              />
              <h3 className="font-display text-xs font-bold text-[#00bfff] tracking-widest text-glow-blue">
                PROGRAMMING LANGUAGES &amp; SCRIPTING
              </h3>
            </div>
            <span className="font-mono text-xs text-[#e8eaf640] tracking-widest">
              // MULTI-LANGUAGE PROFICIENCY
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {programmingLanguages.map((lang) => (
              <div
                key={lang.name}
                className="p-3 bg-[#0d0d0d] border border-[#e8eaf610] hover:border-[#00bfff50] hover:shadow-[0_0_8px_#00bfff30] transition-all duration-200"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="w-1.5 h-1.5 rotate-45"
                    style={{ background: lang.color, boxShadow: `0 0 6px ${lang.color}` }}
                  />
                  <span className="font-display text-sm font-bold text-[#e8eaf6]">
                    {lang.name}
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#e8eaf660] block leading-tight">
                  {lang.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = (text: string, type: "email" | "phone") => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text);
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
    }

    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const contactChannels = [
    {
      id: "email",
      label: "PRIMARY EMAIL",
      value: "archundia.cr4@gmail.com",
      actionText: "SEND EMAIL",
      href: "mailto:archundia.cr4@gmail.com",
      color: "#00ff41",
      border: "neon-border-green",
      copyType: "email" as const,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      id: "phone",
      label: "DIRECT SECURE LINE / PHONE",
      value: "+52 55 8315 8576",
      actionText: "WHATSAPP CHAT",
      href: "https://wa.me/525583158576?text=Hola%20Carlos,%20vi%20tu%20portafolio%20y%20me%20gustaria%20contactarte",
      color: "#00bfff",
      border: "neon-border-blue",
      copyType: "phone" as const,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      handle: "/in/carlos-ramos-archundia",
      href: "https://www.linkedin.com/in/carlos-ramos-archundia",
      color: "#00bfff",
      border: "neon-border-blue",
      category: "PROFESSIONAL NETWORK",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      handle: "@ArchundiaXP",
      href: "https://github.com/ArchundiaXP",
      color: "#00ff41",
      border: "neon-border-green",
      category: "CODE REPOSITORIES",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      ),
    },
    {
      name: "Hack The Box",
      handle: "Archundia (Verified Profile)",
      href: "https://profile.hackthebox.com/profile/019f5c9c-2384-72f2-adaf-8388db3b0f9c?utm_medium=copy_url",
      color: "#00ff41",
      border: "neon-border-green",
      category: "CTF & LAB PLATFORM",
      icon: <HackTheBoxIcon className="w-5 h-5" />,
    },
    {
      name: "TryHackMe",
      handle: "Archundia (Ranked Hacker)",
      href: "https://tryhackme.com/p/Archundia",
      color: "#ff003c",
      border: "neon-border-red",
      category: "PENTESTING LABS",
      icon: <TryHackMeIcon className="w-5 h-5" />,
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-[#050505] relative overflow-hidden">
      <div className="section-divider mb-0" />
      <div className="absolute inset-0 cyber-grid opacity-20" />
      {/* Graphical Hacker Background: Quantum Radio Beacon (Left) */}
      <HackerQuantumBeacon />
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="font-mono text-xs text-[#00ff41] tracking-widest mb-2 opacity-70">
            // SECTION_06
          </div>
          <h2 className="font-display text-4xl font-black text-[#e8eaf6] tracking-widest">
            ESTABLISH<span className="text-[#00ff41] text-glow-green">_</span>CONNECTION
          </h2>
          <div className="mt-3 h-px w-32 bg-gradient-to-r from-[#00ff41] to-transparent" />
        </div>

        {/* Highlighted CV Download Banner */}
        <div className="mb-12 bg-gradient-to-r from-[#111118] via-[#161625] to-[#111118] border border-[#00ff4140] p-6 md:p-8 relative overflow-hidden group hover:border-[#00ff41] transition-all duration-300 shadow-[0_0_25px_rgba(0,255,65,0.15)]">
          <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-[#00ff4110] rounded-full blur-2xl pointer-events-none group-hover:bg-[#00ff4120] transition-all duration-300" />
          <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6 relative z-10">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <span className="font-mono text-[11px] px-2.5 py-0.5 bg-[#00ff4115] border border-[#00ff4150] text-[#00ff41] tracking-widest font-bold">
                  ● OFFICIAL RESUME / CV
                </span>
                <span className="font-mono text-xs text-[#e8eaf660] tracking-widest">
                  DOCUMENT FORMAT: PDF [AUTHENTICATED]
                </span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-black text-[#e8eaf6] tracking-wider mb-2">
                Carlos Ramos Archundia — Curriculum Vitae
              </h3>
              <p className="font-body text-sm md:text-base text-[#e8eaf6aa] leading-relaxed max-w-2xl">
                Download the complete verified curriculum detailing offensive security experience,
                vulnerability assessments, software development, and technical credentials.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full xl:w-auto flex-shrink-0">
              <a
                href="/CV_Ramos_Archundia_Carlos.pdf"
                download="CV_Ramos_Archundia_Carlos.pdf"
                className="font-mono text-xs font-bold tracking-widest px-6 py-4 bg-[#00ff41] text-[#050505] hover:bg-[#00ff41ee] hover:shadow-[0_0_20px_#00ff41] hover:scale-105 transition-all duration-200 flex items-center justify-center gap-3 whitespace-nowrap"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                <span>&gt; DOWNLOAD_CV.PDF [EXECUTE]</span>
              </a>
              <a
                href="/CV_Ramos_Archundia_Carlos.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs font-bold tracking-widest px-6 py-4 bg-[#111118] border border-[#00ff4150] text-[#00ff41] hover:bg-[#00ff4115] hover:border-[#00ff41] hover:shadow-[0_0_15px_#00ff4130] transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                <span>PREVIEW</span>
              </a>
            </div>
          </div>
        </div>

        {/* Direct Channels (Email & Phone) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contactChannels.map((channel) => (
            <div
              key={channel.id}
              className={`bg-[#111118] ${channel.border} p-6 flex flex-col justify-between group hover:scale-[1.01] transition-all duration-300`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#e8eaf660] tracking-widest">
                    {channel.label}
                  </span>
                  <div
                    className="p-2 bg-[#0d0d0d] border border-[#e8eaf615]"
                    style={{ color: channel.color }}
                  >
                    {channel.icon}
                  </div>
                </div>
                <div className="font-display text-xl md:text-2xl font-bold text-[#e8eaf6] tracking-wide mb-6">
                  {channel.value}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-[#ffffff10] flex-wrap">
                <a
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="font-mono text-xs px-4 py-2.5 bg-[#0d0d0d] border border-[#e8eaf620] text-[#e8eaf6] hover:border-[#00ff41] hover:text-[#00ff41] hover:shadow-[0_0_10px_#00ff4140] transition-all duration-200 flex items-center gap-2"
                >
                  <span>{channel.actionText}</span>
                  <span>›</span>
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy(channel.value, channel.copyType)}
                  className="font-mono text-xs px-4 py-2.5 bg-[#0d0d0d] border border-[#e8eaf620] text-[#e8eaf680] hover:text-[#e8eaf6] hover:border-[#e8eaf660] transition-all duration-200 flex items-center gap-2 cursor-pointer"
                >
                  {(channel.copyType === "email" && copiedEmail) ||
                  (channel.copyType === "phone" && copiedPhone) ? (
                    <span className="text-[#00ff41] font-bold">✓ COPIED!</span>
                  ) : (
                    <span>COPY VALUE</span>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Social & Platform Channels (LinkedIn, GitHub, HTB, THM) */}
        <div>
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div
                className="w-2 h-2 rotate-45 bg-[#00bfff]"
                style={{ boxShadow: "0 0 8px #00bfff" }}
              />
              <h3 className="font-display text-sm font-bold text-[#00bfff] tracking-widest text-glow-blue">
                OFFICIAL PROFILES &amp; PLATFORMS
              </h3>
            </div>
            <span className="font-mono text-xs text-[#e8eaf640] tracking-widest">
              // VERIFIED SOCIAL &amp; CTF PROFILES
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-[#111118] ${item.border} p-5 hover:scale-105 hover:bg-[#161624] transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="font-mono text-[10px] px-2 py-0.5 tracking-widest"
                      style={{
                        color: item.color,
                        border: `1px solid ${item.color}40`,
                        background: `${item.color}10`,
                      }}
                    >
                      {item.category}
                    </span>
                    <div style={{ color: item.color }} className="group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                  </div>
                  <h4 className="font-display text-lg font-bold text-[#e8eaf6] tracking-wide mb-1">
                    {item.name}
                  </h4>
                  <p className="font-mono text-xs text-[#e8eaf670] truncate">
                    {item.handle}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#ffffff08] flex items-center justify-between">
                  <span className="font-mono text-[11px] text-[#e8eaf650] group-hover:text-[#00ff41] transition-colors">
                    OPEN PROFILE
                  </span>
                  <span
                    style={{ color: item.color }}
                    className="font-mono text-xs group-hover:translate-x-1 transition-transform"
                  >
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-6 bg-[#050505] border-t border-[#00bfff15] relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3.5">
          <img
            src="/logo.png"
            alt="ArchundiaXP Logo"
            className="w-10 h-10 rounded-full object-cover border border-[#00ff4150] shadow-[0_0_12px_#00ff4140]"
          />
          <div>
            <div className="font-display text-sm font-bold text-[#00ff41] text-glow-green tracking-widest mb-1">
              CARLOS RAMOS
            </div>
            <div className="font-mono text-xs text-[#e8eaf640] tracking-widest">
              Penetration Tester &amp; Incident Response
            </div>
          </div>
        </div>
        <div className="font-mono text-xs text-[#e8eaf630] tracking-widest text-center">
          © 2026 — ALL SYSTEMS OPERATIONAL
        </div>
        <div className="font-mono text-xs text-[#00ff4150] tracking-widest">
          [ AUTHORIZED USE ONLY ]
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <div className="scanline-overlay" />
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
