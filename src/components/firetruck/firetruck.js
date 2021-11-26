import React from "react";

export default class FireTruck extends React.Component {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="300.000000pt"
        height="190.000000pt"
      >
        <title>Firetruck Template </title>"
        <g id="layer2" transform="translate(0 190)" display="inline">
          <g id="svg_51" transform="matrix(114 66)" display="inline">
            <path
              id="svg_52"
              onClick={() => this.props.onFill(0)}
              fill={this.props.fillColors[0]}
              fill-rule="evenodd"
              stroke="#000000"
              stroke-width="8"
              d="M2072 1765 l4 -35 -102 0 c-65 0 -117 5 -144 15 -65 23 -80 20 -80
-14 0 -28 4 -30 128 -76 70 -25 155 -56 190 -68 34 -12 62 -27 62 -32 0 -15
133 -57 156 -49 16 5 17 4 4 -6 -12 -9 -9 -10 15 -6 20 4 25 3 15 -3 -9 -5
-74 -5 -160 0 -125 8 -147 7 -156 -6 -15 -21 -144 -22 -144 -1 0 7 -11 39 -25
69 -38 87 -110 110 -178 57 -26 -20 -57 -95 -57 -137 0 -23 -2 -23 -100 -23
l-100 0 0 -35 c0 -19 4 -35 9 -35 18 0 -36 -113 -58 -121 -11 -5 -24 -21 -27
-36 -4 -15 -8 -128 -8 -250 l-1 -222 -25 -5 c-14 -3 -50 -8 -82 -11 -107 -12
-188 -76 -188 -149 0 -17 9 -50 20 -73 l19 -42 -50 19 c-27 11 -52 20 -55 20
-3 0 4 13 15 29 42 58 20 101 -74 142 -28 12 -60 30 -73 40 l-23 17 23 7 c53
16 75 66 44 97 -8 8 -26 38 -40 67 -22 42 -35 56 -71 71 -53 23 -103 17 -154
-17 -40 -27 -60 -57 -61 -90 0 -12 -4 -25 -10 -28 -16 -10 -11 -44 10 -65 11
-11 20 -23 20 -26 0 -3 14 -19 31 -35 38 -35 34 -53 -27 -115 -39 -40 -50 -46
-99 -51 -53 -6 -56 -5 -88 31 -32 35 -57 46 -57 26 0 -18 -21 -10 -48 18 -16
16 -39 29 -55 30 -26 2 -28 0 -22 -27 4 -20 2 -30 -9 -34 -9 -4 -18 -2 -21 3
-8 13 -35 13 -35 0 0 -5 7 -10 16 -10 9 0 24 -10 34 -22 17 -22 17 -23 -3 -33
-29 -14 -33 -35 -7 -42 14 -4 20 -11 16 -22 -21 -66 -21 -64 7 -59 15 3 27 1
27 -3 0 -19 29 -8 48 18 16 23 22 25 35 15 12 -10 20 -8 45 13 17 14 47 29 66
32 31 5 34 3 41 -25 3 -17 13 -36 21 -43 20 -16 66 -14 103 5 38 20 41 20 41
-4 0 -11 -4 -20 -10 -20 -22 0 -77 -62 -104 -117 -24 -52 -31 -59 -52 -55 -37
7 -72 -6 -90 -33 -15 -23 -15 -27 -1 -49 22 -32 134 -106 162 -106 13 0 32 11
43 25 11 14 24 25 30 25 6 0 20 29 32 64 11 35 29 70 38 79 19 17 73 16 117
-2 25 -10 31 -10 41 3 6 9 21 16 33 16 12 0 38 7 58 15 20 8 38 13 41 10 8 -7
-64 -35 -91 -35 -13 0 -27 -3 -30 -6 -11 -11 12 -43 51 -69 43 -29 112 -34
167 -11 32 14 34 16 25 47 -14 46 -39 81 -55 75 -12 -4 -27 7 -31 24 0 3 -4
14 -9 25 -29 73 -35 88 -32 91 2 3 116 -45 127 -54 3 -2 -12 -17 -32 -34 -40
-31 -52 -57 -18 -36 16 10 23 9 44 -11 28 -27 42 -69 27 -84 -13 -13 15 -47
39 -47 25 0 50 32 50 64 0 23 3 27 18 20 9 -4 38 -9 64 -12 42 -3 51 -1 78 26
23 24 30 39 30 70 0 49 -14 62 -83 71 -72 10 -139 58 -172 125 -28 56 -30 74
-14 110 13 29 44 43 116 55 l52 8 3 -31 3 -31 86 -3 c80 -3 87 -4 99 -28 16
-29 62 -59 107 -69 41 -8 115 23 138 59 17 26 18 26 154 26 75 0 152 4 172 9
36 8 37 8 48 -30 18 -61 96 -89 187 -69 59 13 81 32 95 81 7 22 19 39 30 42
13 4 19 14 19 34 0 28 3 30 69 44 l69 15 6 -31 c10 -52 47 -79 109 -79 87 -1
104 8 124 64 10 28 23 50 30 50 6 0 13 10 15 22 2 18 12 25 46 32 l42 9 -2
271 -3 271 -30 5 c-28 5 -30 9 -35 55 -4 41 -9 50 -28 55 -17 3 -28 17 -37 44
-15 44 -29 56 -65 56 -14 0 -77 23 -139 50 -62 28 -123 50 -135 50 -11 0 -96
32 -188 70 -92 39 -175 70 -184 70 -13 0 -15 -8 -12 -35z m28 5 c0 -11 -4 -20
-10 -20 -5 0 -10 9 -10 20 0 11 5 20 10 20 6 0 10 -9 10 -20z m184 -60 c121
-50 156 -68 156 -82 0 -16 -3 -17 -21 -8 -11 7 -27 9 -35 6 -8 -3 -13 -2 -10
3 7 10 -249 115 -262 107 -5 -3 -7 6 -4 20 2 14 8 24 12 22 4 -2 78 -32 164
-68z m-517 8 c-3 -7 -5 -2 -5 12 0 14 2 19 5 13 2 -7 2 -19 0 -25z m48 20 c14
-6 25 -19 25 -29 0 -15 -4 -16 -30 -6 -18 7 -30 19 -30 29 0 21 1 21 35 6z
m345 -29 c0 -5 -70 -9 -155 -9 -102 0 -155 4 -155 11 0 7 52 10 155 8 85 -1
155 -6 155 -10z m75 -39 l50 -19 -96 -1 c-61 0 -112 5 -139 15 -57 20 -74 19
-28 -3 26 -12 35 -21 30 -30 -7 -10 -29 -5 -103 21 l-94 35 165 1 c142 1 173
-2 215 -19z m89 -32 c-5 -8 0 -9 14 -6 12 4 20 2 16 -3 -7 -12 -294 -12 -294
1 0 5 56 11 133 13 72 1 133 4 135 5 2 1 0 -3 -4 -10z m145 -17 l6 26 107 -46
c59 -25 108 -48 107 -51 0 -3 -6 -14 -14 -24 -14 -19 -17 -18 -111 22 -52 23
-101 42 -108 42 -9 0 -11 10 -7 33 l6 32 4 -30 4 -30 6 26z m-681 -14 c19 -15
45 -68 37 -75 -3 -4 -51 -8 -106 -10 l-99 -4 10 28 c15 39 30 55 65 70 31 14
70 10 93 -9z m616 1 c-5 -8 -2 -9 9 -5 10 4 17 2 17 -4 0 -8 -35 -10 -109 -7
-60 2 -108 1 -106 -2 2 -3 0 -11 -4 -18 -6 -9 -23 -7 -72 12 l-64 24 159 1
c87 0 161 3 164 6 10 9 13 5 6 -7z m70 -40 c-8 -12 -254 -10 -254 3 0 7 44 10
130 8 71 -1 127 -6 124 -11z m51 -18 c-3 -6 -41 -9 -83 -8 l-77 2 75 6 c41 4
79 7 83 8 5 1 5 -2 2 -8z m-314 -13 c-4 -4 -18 -3 -32 2 -23 9 -22 9 8 8 18
-1 28 -6 24 -10z m144 -4 c0 -6 3 -15 8 -19 4 -4 7 -2 7 4 0 7 36 12 99 14 59
2 97 -1 93 -6 -3 -5 2 -6 12 -3 9 4 14 3 11 -2 -3 -5 3 -11 12 -13 10 -3 -16
-2 -58 0 -50 3 -79 1 -83 -7 -5 -8 22 -11 93 -11 67 0 101 -4 101 -11 0 -8
-30 -9 -97 -5 -157 8 -181 11 -177 17 2 3 -29 18 -69 32 l-72 26 60 -2 c38 -1
60 -6 60 -14z m353 0 c-9 -10 -19 -28 -22 -40 -7 -21 -26 -33 -26 -15 0 15 40
72 51 72 8 0 7 -6 -3 -17z m61 4 c6 -8 14 -28 17 -46 l7 -32 -52 3 c-45 3 -50
5 -45 23 17 56 50 80 73 52z m-934 -65 c-3 -4 -56 -8 -116 -10 -104 -4 -109
-3 -109 16 0 22 35 29 165 35 51 2 60 -1 63 -16 2 -10 1 -22 -3 -25z m425 2
c113 -3 211 -11 218 -16 14 -12 16 -98 2 -98 -5 0 -10 13 -10 29 0 49 -18 57
-142 65 -62 4 -159 9 -215 13 -56 3 -100 10 -97 15 3 5 13 7 22 4 10 -3 109
-8 222 -12z m-290 -33 c0 -21 -38 -26 -285 -36 -77 -3 -170 -8 -207 -11 -64
-6 -68 -5 -68 15 0 12 3 21 8 22 24 3 438 26 490 28 55 1 62 -1 62 -18z m328
3 c121 -6 144 -10 152 -24 9 -17 1 -18 -118 -14 -320 11 -352 14 -352 36 0 20
4 21 88 15 48 -4 151 -10 230 -13z m499 6 l53 0 0 -47 0 -48 -170 3 -170 3 0
27 c0 15 -3 38 -7 51 l-6 24 123 -6 c68 -4 147 -7 177 -7z m-654 -49 l127 -1
0 -144 0 -144 -97 -6 c-54 -3 -127 -8 -162 -11 l-64 -5 7 68 c3 37 9 106 13
154 l6 86 -29 5 c-16 3 -6 3 21 2 28 -2 107 -4 178 -4z m-275 -8 c-26 -2 -71
-2 -100 0 -29 2 -8 3 47 3 55 0 79 -1 53 -3z m525 -3 l67 0 0 -134 0 -133 -67
-6 c-126 -12 -113 -28 -113 139 l0 146 23 -6 c12 -3 52 -6 90 -6z m-730 -7
c-29 -2 -77 -2 -105 0 -29 2 -6 3 52 3 58 0 81 -1 53 -3z m286 -137 l-13 -136
-151 0 -151 0 19 128 c10 70 21 129 22 131 4 3 277 18 283 15 2 -1 -2 -63 -9
-138z m-461 127 c-10 -2 -28 -2 -40 0 -13 2 -5 4 17 4 22 1 32 -1 23 -4z m138
-35 c-3 -18 -11 -72 -17 -120 -7 -47 -15 -91 -19 -97 -4 -8 -48 -11 -132 -9
l-126 3 45 122 45 122 56 4 c32 2 79 4 106 5 l48 2 -6 -32z m30 0 c-3 -18 -10
-67 -16 -108 -14 -100 -19 -120 -28 -120 -4 0 1 59 12 130 11 72 24 130 29
130 5 0 7 -15 3 -32z m852 -275 c-3 -265 -4 -288 -20 -291 -17 -3 -18 16 -18
287 0 285 0 291 20 291 20 0 20 -5 18 -287z m406 267 c7 -7 -59 -10 -192 -10
-181 0 -202 2 -202 17 0 15 17 16 192 9 106 -3 197 -11 202 -16z m-314 -280
c0 -241 -1 -260 -17 -260 -10 0 -28 -3 -40 -6 l-23 -6 0 266 0 266 40 0 40 0
0 -260z m30 170 l0 -90 90 0 90 0 0 90 c0 53 4 90 10 90 6 0 10 -43 10 -109
l0 -110 -42 -5 c-24 -3 -72 -7 -109 -10 l-65 -5 -3 120 c-1 79 1 119 8 119 7
0 11 -33 11 -90z m170 11 c0 -90 0 -91 -102 -91 l-58 0 0 85 0 85 80 0 80 0 0
-79z m120 -157 l0 -232 -22 -6 c-13 -3 -26 -6 -29 -6 -13 0 -21 87 -25 280
l-5 195 40 0 41 0 0 -231z m-1567 130 c-18 -54 -28 -51 -18 5 4 24 12 41 20
41 11 0 11 -8 -2 -46z m1107 -193 c0 -93 -1 -99 -22 -104 -15 -4 -26 0 -35 14
-18 25 -65 49 -98 49 -24 0 -25 2 -25 65 l0 64 73 4 c39 1 80 4 90 5 15 2 17
-9 17 -97z m-667 82 c-83 -2 -223 -2 -310 0 -87 1 -18 3 152 3 171 0 242 -2
158 -3z m477 -62 c0 -61 -3 -70 -23 -84 -13 -9 -29 -29 -36 -45 -12 -28 -17
-30 -104 -41 -51 -7 -99 -14 -107 -17 -13 -3 -15 14 -15 116 0 72 4 121 10
121 6 1 64 5 130 9 66 3 126 7 133 8 8 2 12 -18 12 -67z m-300 -71 l0 -120
-105 0 -104 0 -3 83 -3 82 -140 0 -140 0 -3 -82 -3 -83 -69 0 -70 0 0 120 0
120 320 0 320 0 0 -120z m860 58 c0 -59 -1 -60 -18 -45 -23 21 -74 22 -113 1
-36 -18 -68 -83 -69 -136 0 -21 -4 -38 -10 -38 -6 0 -10 50 -10 129 l0 129 88
7 c80 6 123 10 130 14 1 0 2 -27 2 -61z m-1084 -168 l0 -145 -5 140 -6 140
-120 0 -120 0 -5 -140 -6 -140 -2 141 c-1 77 1 144 5 148 4 3 63 5 132 4 l126
-3 1 -145z m-1024 90 c-3 -32 -8 -40 -23 -40 -16 0 -18 3 -9 19 15 28 13 38
-10 44 -27 7 -60 -3 -60 -17 0 -32 28 -48 110 -62 98 -17 135 -38 135 -79 1
-22 -6 -31 -35 -44 -19 -9 -37 -19 -40 -22 -3 -4 -5 20 -6 52 -1 32 3 59 7 59
5 0 9 -21 9 -46 0 -50 11 -51 36 -3 l15 30 -47 21 c-64 28 -183 22 -240 -11
-25 -15 -33 -17 -24 -6 7 8 14 30 15 46 2 17 12 41 24 53 l21 21 -6 -35 c-4
-19 -14 -41 -22 -47 -19 -16 -20 -16 43 2 44 12 46 14 18 14 -31 1 -32 2 -27
34 8 42 29 57 79 57 l41 0 -4 -40z m803 -95 c0 -101 -3 -135 -12 -135 -10 0
-13 34 -13 135 0 101 3 135 13 135 9 0 12 -34 12 -135z m35 0 c0 -83 -4 -135
-10 -135 -6 0 -10 52 -10 135 0 83 4 135 10 135 6 0 10 -52 10 -135z m30 0 c0
-83 -4 -135 -10 -135 -6 0 -10 52 -10 135 0 83 4 135 10 135 6 0 10 -52 10
-135z m40 0 c0 -83 -4 -135 -10 -135 -6 0 -10 52 -10 135 0 83 4 135 10 135 6
0 10 -52 10 -135z m30 0 c0 -83 -4 -135 -10 -135 -6 0 -10 52 -10 135 0 83 4
135 10 135 6 0 10 -52 10 -135z m40 0 c0 -113 -2 -135 -15 -135 -13 0 -15 22
-15 135 0 113 2 135 15 135 13 0 15 -22 15 -135z m30 0 c0 -83 -4 -135 -10
-135 -6 0 -10 52 -10 135 0 83 4 135 10 135 6 0 10 -52 10 -135z m1077 120
c23 -16 43 -71 43 -119 0 -27 2 -28 35 -23 19 3 35 2 35 -4 0 -5 -4 -9 -9 -9
-5 0 -23 -3 -40 -6 -30 -6 -31 -6 -31 30 0 80 -51 144 -104 130 -36 -9 -65
-61 -72 -133 -6 -51 -10 -62 -28 -66 -180 -41 -166 -40 -166 -21 0 8 15 17 38
21 20 3 58 11 83 16 l46 10 6 54 c3 29 13 65 23 80 33 51 99 69 141 40z
m-2025 -12 c9 -10 23 -32 31 -49 l16 -31 -47 12 c-50 13 -57 22 -48 60 7 29
27 32 48 8z m-92 -13 c0 -4 -7 -14 -16 -21 -14 -11 -18 -10 -30 6 -13 17 -12
20 3 26 20 7 43 1 43 -11z m1691 -17 c30 -28 49 -82 49 -142 0 -30 4 -41 16
-41 8 0 12 -4 9 -10 -3 -5 -12 -10 -19 -10 -9 0 -15 21 -18 68 -9 118 -57 170
-130 139 -44 -18 -64 -66 -74 -170 -6 -70 -8 -75 -33 -81 -14 -3 -36 -8 -48
-12 -13 -3 -23 -2 -23 3 0 5 20 14 45 21 l45 12 0 73 c0 156 93 233 181 150z
m400 27 c20 0 49 -85 49 -142 0 -79 -16 -73 -22 7 -7 82 -27 115 -71 115 -30
1 -31 1 -12 16 11 8 26 12 33 9 8 -3 18 -5 23 -5z m-409 -47 c24 -27 38 -90
38 -170 0 -57 -3 -73 -14 -73 -11 0 -13 8 -9 33 7 45 -13 147 -36 177 -11 16
-30 26 -50 28 -43 4 -29 22 18 22 24 0 44 -7 53 -17z m342 -12 c-20 -39 -20
-167 0 -214 l15 -37 -50 0 c-63 0 -84 11 -98 51 -14 41 -14 49 2 49 6 0 28 5
48 10 36 10 37 11 43 72 8 69 20 98 41 98 11 0 11 -4 -1 -29z m66 2 c32 -70
17 -234 -23 -241 -41 -8 -64 158 -33 233 18 42 38 45 56 8z m-320 -23 c0 -37
-26 -41 -32 -5 -4 16 0 25 11 28 9 3 17 5 19 6 1 0 2 -12 2 -29z m-194 -22
c-16 -34 -20 -61 -20 -133 0 -84 6 -108 42 -177 6 -12 -112 -10 -143 2 -15 6
-32 24 -41 45 -18 45 -10 54 69 78 l57 18 0 67 c0 88 15 142 39 142 17 0 17
-2 -3 -42z m84 0 c41 -90 16 -308 -35 -308 -30 0 -55 77 -55 171 0 158 48 231
90 137z m-1685 2 c5 -8 11 -8 20 0 8 6 29 10 47 8 30 -3 33 -7 40 -43 11 -63
0 -111 -29 -124 -46 -21 -92 -14 -124 20 -16 17 -29 37 -29 45 0 8 -4 14 -8
14 -4 0 -6 16 -4 35 4 31 8 35 33 35 16 0 29 5 29 10 0 13 17 13 25 0z m1527
-24 l-4 -34 -86 -16 c-48 -10 -94 -19 -103 -22 -13 -4 -16 3 -15 36 0 22 5 40
11 41 5 0 46 6 90 14 118 19 112 20 107 -19z m-1369 -5 c2 -10 1 -24 -3 -30
-4 -7 -7 1 -8 18 -1 35 3 40 11 12z m-257 -28 c-5 -12 -10 -13 -18 -5 -8 8 -8
15 3 28 15 18 25 4 15 -23z m904 2 l0 -35 -70 0 -70 0 0 35 0 35 70 0 70 0 0
-35z m500 -5 l0 -40 -105 0 -105 0 0 40 0 40 105 0 105 0 0 -40z m490 0 c0
-22 -4 -40 -10 -40 -5 0 -10 18 -10 40 0 22 5 40 10 40 6 0 10 -18 10 -40z
m-278 -50 c-2 -22 -9 -40 -16 -40 -6 0 -21 -3 -33 -6 -18 -5 -23 -2 -23 11 0
15 -6 17 -42 11 -24 -4 -53 -9 -65 -13 -18 -4 -23 -1 -23 15 0 17 10 23 58 32
31 7 73 16 92 20 56 13 56 13 52 -30z m-712 -11 c0 -20 -4 -21 -46 -15 -26 3
-57 6 -70 6 -15 0 -24 6 -24 15 0 12 14 15 70 15 65 0 70 -2 70 -21z m500 -9
c0 -17 -7 -20 -52 -20 -91 0 -158 12 -158 26 0 11 23 14 105 14 98 0 105 -1
105 -20z m-667 3 c-13 -2 -23 -8 -23 -13 0 -4 -30 -13 -67 -20 -111 -21 -146
-75 -108 -168 20 -46 48 -77 103 -112 39 -26 41 -28 19 -32 -17 -3 -43 9 -89
43 -52 37 -69 57 -87 100 -20 45 -22 58 -12 90 18 60 59 87 166 112 11 3 43 5
70 4 28 0 40 -2 28 -4z m-483 -13 c0 -5 -5 -10 -12 -10 -6 0 -25 -11 -43 -24
-22 -17 -36 -22 -46 -15 -11 7 -11 9 3 9 9 0 30 11 45 25 29 25 53 32 53 15z
m815 -15 c149 -2 287 -5 308 -5 36 0 37 -1 37 -36 l0 -35 -232 6 c-128 3 -284
8 -345 11 l-113 6 0 27 c0 36 5 40 43 36 18 -3 154 -7 302 -10z m465 -19 c0
-28 -4 -34 -24 -38 -29 -6 -46 8 -46 36 0 16 -3 17 -12 8 -10 -10 -10 -17 0
-32 7 -11 10 -20 8 -20 -2 0 -11 -3 -20 -6 -13 -5 -16 1 -16 30 0 22 5 36 13
37 37 2 58 6 64 12 17 18 33 5 33 -27z m-1305 4 c-8 -14 8 -13 22 1 8 8 21 8
47 -1 32 -10 35 -14 30 -38 -4 -15 -14 -33 -23 -40 -14 -12 -17 -8 -22 35 -5
45 -15 26 -10 -22 3 -41 10 -49 29 -33 20 18 38 14 70 -15 12 -11 22 -15 22
-9 0 7 -14 21 -31 31 -31 19 -31 19 -9 31 12 6 19 14 16 17 -3 3 -12 0 -21 -7
-8 -7 -15 -10 -15 -7 0 13 13 37 20 37 17 0 60 -51 60 -73 0 -29 -70 -99 -78
-78 -12 33 -54 59 -107 66 -64 8 -70 22 -27 69 l27 31 -27 -24 c-16 -14 -28
-20 -28 -14 0 6 12 21 28 32 31 23 36 25 27 11z m-89 -35 c12 -13 25 -21 30
-17 4 4 4 2 0 -5 -5 -9 -13 -10 -32 -1 -18 8 -21 14 -12 20 10 6 9 8 -4 8 -9
0 -25 3 -35 6 -15 5 -15 4 -3 -5 16 -12 10 -14 -14 -5 -8 3 -12 12 -9 20 7 20
53 8 79 -21z m-480 -12 c13 -17 13 -17 14 2 0 16 4 14 23 -12 22 -33 67 -46
67 -20 0 6 12 -1 25 -16 37 -41 34 -89 -6 -118 -19 -13 -34 -18 -38 -12 -3 6
-17 14 -31 18 -21 7 -23 6 -13 -7 11 -12 8 -19 -12 -38 -15 -14 -25 -18 -25
-11 0 9 -8 11 -25 7 -26 -7 -26 -6 -10 23 20 39 20 40 -12 52 l-28 11 25 11
c35 15 35 15 16 36 -16 18 -16 20 0 29 12 6 15 17 12 36 -6 30 -1 33 18 9z
m465 -13 c10 -6 19 -17 19 -25 0 -17 -21 -22 -107 -28 l-61 -5 30 34 c33 36
79 45 119 24z m1017 -15 c4 -3 -8 -20 -26 -36 -26 -23 -41 -29 -80 -29 -52 0
-104 26 -122 61 l-12 22 116 -5 c64 -3 120 -9 124 -13z m-981 -42 c-3 -10 -5
-4 -5 12 0 17 2 24 5 18 2 -7 2 -21 0 -30z m-17 -3 c0 -5 -21 -9 -47 -8 l-48
1 45 7 c25 4 46 8 48 8 1 1 2 -2 2 -8z m-100 -45 c0 -57 -20 -59 -21 -2 l-2
42 -6 -40 c-8 -49 -4 -58 20 -52 26 7 24 1 -6 -19 -33 -21 -92 -29 -110 -14
-21 17 -19 33 3 21 9 -5 30 -11 47 -12 23 -3 30 0 33 15 3 13 0 16 -9 10 -8
-4 -21 -9 -30 -9 -14 -1 -15 2 -6 22 13 29 31 30 21 1 -6 -21 -6 -21 11 -4 28
27 2 38 -77 31 -63 -5 -68 -4 -68 15 0 18 7 20 58 21 31 1 71 5 87 9 54 14 55
13 55 -35z m268 9 c21 -24 22 -28 8 -36 -25 -14 -38 -5 -52 33 -7 19 -13 26
-13 16 -1 -10 4 -27 10 -38 16 -31 -4 -49 -49 -42 -20 3 -38 7 -40 8 -2 2 4
17 13 35 13 26 14 34 3 47 -11 14 -7 15 42 10 43 -5 60 -12 78 -33z m-481 -11
c-3 -10 -5 -4 -5 12 0 17 2 24 5 18 2 -7 2 -21 0 -30z m350 0 c-13 -24 -20
-26 -71 -27 -55 -1 -56 0 -56 27 0 27 0 27 70 27 l71 0 -14 -27z m-259 -25
c-6 -18 -28 -21 -28 -4 0 9 7 16 16 16 9 0 14 -5 12 -12z m32 5 c0 -14 -19
-38 -25 -32 -8 8 5 39 16 39 5 0 9 -3 9 -7z m513 -25 c28 -12 80 -44 115 -70
79 -60 117 -80 145 -76 35 5 16 23 -26 24 -77 2 -60 29 18 28 68 0 86 -15 80
-63 -6 -54 -46 -85 -102 -78 -24 2 -52 12 -63 22 -14 13 -19 14 -23 3 -2 -9
-3 -8 -3 2 1 9 10 14 21 12 66 -11 135 -6 152 11 17 17 16 17 -22 1 -57 -24
-132 -6 -160 39 -12 19 -36 37 -61 47 -22 8 -84 33 -138 54 l-96 39 27 19 c32
22 59 19 136 -14z m-340 -5 c-13 -2 -33 -2 -45 0 -13 2 -3 4 22 4 25 0 35 -2
23 -4z m34 -25 c-3 -7 -5 -2 -5 12 0 14 2 19 5 13 2 -7 2 -19 0 -25z m-17 3
c0 -5 3 -16 6 -25 8 -20 -9 -20 -52 0 -45 22 -43 34 6 34 22 0 40 -4 40 -9z
m201 -5 c15 -6 49 -66 49 -86 0 -12 -86 -38 -147 -43 -46 -3 -52 -2 -57 17
-11 40 -7 43 57 49 58 5 125 23 116 31 -2 3 -29 -2 -59 -10 -79 -20 -120 -19
-120 5 0 11 -3 26 -6 34 -4 12 8 14 73 12 43 -1 85 -5 94 -9z m-206 -46 c11 0
15 -10 15 -35 0 -19 -3 -35 -7 -35 -13 0 -83 74 -83 87 0 11 6 10 30 -2 16 -8
36 -15 45 -15z m32 -37 c-2 -16 -4 -5 -4 22 0 28 2 40 4 28 2 -13 2 -35 0 -50z
m-29 -43 c16 -8 22 -18 19 -31 -3 -10 0 -19 6 -19 6 0 8 -2 5 -5 -3 -3 -17 -1
-31 4 -36 14 -60 -15 -99 -121 l-14 -38 -49 50 c-61 62 -51 80 11 19 26 -24
42 -35 35 -23 -15 31 -71 76 -87 70 -10 -4 -11 1 -5 17 5 12 11 21 15 20 3 -2
13 -3 21 -3 8 0 31 -15 51 -32 21 -18 35 -26 32 -18 -4 13 -31 35 -83 65 -17
10 -17 13 -2 42 9 17 31 43 49 57 l33 25 35 -33 c19 -19 46 -39 58 -46z m426
9 c29 -34 35 -27 10 11 -16 24 -16 24 0 9 13 -12 19 -37 22 -92 4 -70 3 -76
-17 -82 -30 -10 -47 10 -31 35 6 11 12 28 12 37 0 24 -37 83 -52 83 -6 0 -2
-10 10 -23 32 -33 27 -39 -6 -9 l-29 26 21 18 c28 23 30 23 60 -13z m-159 -20
c-3 -12 8 -22 36 -33 37 -15 59 -45 59 -81 0 -29 -110 -46 -153 -24 -28 15
-67 50 -67 61 0 4 12 8 28 8 35 0 89 33 89 54 0 20 5 20 -51 -5 -32 -14 -62
-19 -98 -17 -73 4 -72 24 2 31 34 4 80 15 103 25 44 19 58 14 52 -19z m328 34
c-7 -2 -21 -2 -30 0 -10 3 -4 5 12 5 17 0 24 -2 18 -5z m-556 -50 c-3 -10 -5
-4 -5 12 0 17 2 24 5 18 2 -7 2 -21 0 -30z m56 -40 c-7 -2 -19 -2 -25 0 -7 3
-2 5 12 5 14 0 19 -2 13 -5z m-283 -84 c35 -36 56 -67 53 -75 -3 -8 -9 -11
-14 -8 -5 3 -12 -2 -15 -10 -3 -9 -13 -16 -21 -16 -11 0 -9 5 7 18 l23 19 -23
31 c-31 41 -95 86 -114 79 -10 -4 -13 -1 -9 9 12 32 54 15 113 -47z m-29 -16
c27 -25 46 -50 43 -57 -7 -17 -46 -28 -57 -17 -5 5 6 11 23 15 20 3 29 10 24
17 -4 7 -9 7 -13 2 -11 -18 -55 -22 -74 -8 -16 12 -14 14 24 20 l43 7 -35 29
c-38 32 -51 36 -43 15 3 -9 -2 -16 -13 -19 -10 -2 -3 -3 14 -1 35 3 53 -10 27
-20 -31 -12 -53 -6 -73 20 -26 33 -20 42 25 41 28 -1 48 -11 85 -44z"
            />
            <path id="svg_53" onClick={() => this.props.onFill(1)}
              fill={this.props.fillColors[1]}
              fill-rule="evenodd"
              stroke="#000000"
              stroke-width="8"
              d="M2385 1510 c-4 -6 8 -10 29 -10 20 0 36 5 36 10 0 6 -13 10 -29 10
-17 0 -33 -4 -36 -10z"
            />
            <path id="svg_85" onClick={() => this.props.onFill(2)}
              fill={this.props.fillColors[2]}
              fill-rule="evenodd"
              stroke="#000000"
              stroke-width="8"
              d="M2734 1515 c-3 -8 -3 -19 1 -25 10 -16 35 7 28 26 -7 18 -22 18 -29
-1z"
            />
            <path id="svg_54" onClick={() => this.props.onFill(3)}
              fill={this.props.fillColors[3]}
              fill-rule="evenodd"
              stroke="#000000"
              stroke-width="8"
              d="M2760 1400 c0 -16 7 -20 30 -20 23 0 30 4 30 20 0 16 -7 20 -30 20
-23 0 -30 -4 -30 -20z m50 0 c0 -5 -9 -10 -20 -10 -11 0 -20 5 -20 10 0 6 9
10 20 10 11 0 20 -4 20 -10z"
            />
            <path id="svg_55" onClick={() => this.props.onFill(4)}
              fill={this.props.fillColors[4]}
              fill-rule="evenodd"
              stroke="#000000"
              stroke-width="8"
              d="M2067 1363 c-3 -5 -8 -25 -12 -46 -7 -34 -10 -37 -41 -37 l-34 0 0
-85 0 -85 44 0 c25 0 48 5 51 10 3 6 40 10 81 10 l75 0 -3 118 -3 117 -77 3
c-42 2 -79 -1 -81 -5z m141 -115 l3 -108 -66 0 -65 0 0 64 c0 36 -5 68 -11 71
-9 6 -4 57 8 78 3 4 32 7 66 5 l62 -3 3 -107z m-138 -53 l0 -75 -40 0 -40 0 0
75 0 75 40 0 40 0 0 -75z"
            />
            <path id="svg_56" onClick={() => this.props.onFill(5)}
              fill={this.props.fillColors[5]}
              fill-rule="evenodd"
              stroke="#000000"
              stroke-width="8"
              d="M2310 1245 l0 -115 65 0 65 0 0 115 0 115 -65 0 -65 0 0 -115z m120
0 l0 -105 -55 0 -55 0 0 105 0 105 55 0 55 0 0 -105z"
            />
            <path id="svg_57" onClick={() => this.props.onFill(6)}
              fill={this.props.fillColors[6]}
              fill-rule="evenodd"
              stroke="#000000"
              stroke-width="8"
              d="M2330 1039 c0 -24 4 -30 18 -27 10 2 18 14 20 31 3 22 -1 27 -17 27
-17 0 -21 -6 -21 -31z m17 -11 c-3 -7 -5 -2 -5 12 0 14 2 19 5 13 2 -7 2 -19
0 -25z"
            />
            <path id="svg_58" onClick={() => this.props.onFill(7)}
              fill={this.props.fillColors[7]}
              fill-rule="evenodd"
              stroke="#000000"
              stroke-width="8"
              d="M1804 1006 c-3 -7 -4 -33 -2 -57 3 -43 4 -44 38 -44 l35 0 3 58 3 57
-36 0 c-21 0 -38 -6 -41 -14z m66 -21 c0 -9 -9 -15 -25 -15 -16 0 -25 6 -25
15 0 9 9 15 25 15 16 0 25 -6 25 -15z m0 -50 c0 -9 -9 -15 -25 -15 -16 0 -25
6 -25 15 0 9 9 15 25 15 16 0 25 -6 25 -15z"
            />
            <path id="svg_59" onClick={() => this.props.onFill(8)}
              fill={this.props.fillColors[8]}
              fill-rule="evenodd"
              stroke="#000000"
              stroke-width="8"
              d="M1370 960 l0 -50 35 0 35 0 0 50 0 50 -35 0 -35 0 0 -50z m60 25 c0
-9 -9 -15 -25 -15 -16 0 -25 6 -25 15 0 9 9 15 25 15 16 0 25 -6 25 -15z m0
-50 c0 -9 -9 -15 -25 -15 -16 0 -25 6 -25 15 0 9 9 15 25 15 16 0 25 -6 25
-15z"
            />
            <path id="svg_60" onClick={() => this.props.onFill(9)}
              fill={this.props.fillColors[9]}
              fill-rule="evenodd"
              stroke="#000000"
              stroke-width="8"
              d="M2734 858 c-14 -43 -8 -149 9 -166 15 -14 17 -13 27 12 5 15 10 52
10 82 0 80 -29 124 -46 72z m34 -78 c1 -51 -11 -90 -21 -73 -4 7 -3 14 3 18
14 8 13 71 -2 94 -6 11 -8 26 -3 37 7 17 8 17 15 -6 5 -14 8 -45 8 -70z m-21
-22 c-2 -13 -4 -5 -4 17 -1 22 1 32 4 23 2 -10 2 -28 0 -40z"
            />
            <path id="svg_61" onClick={() => this.props.onFill(10)}
              fill={this.props.fillColors[10]}
              fill-rule="evenodd"
              stroke="#000000"
              stroke-width="8"
              d="M2291 809 c-24 -69 -7 -219 25 -219 21 0 37 77 31 152 -6 94 -35 127
-56 67z m45 -66 c7 -69 -11 -152 -29 -134 -9 9 -8 16 1 31 18 30 16 120 -3
120 -12 0 -14 7 -9 28 15 63 31 45 40 -45z m-26 -39 c0 -27 -4 -43 -10 -39
-17 11 -11 85 7 85 2 0 3 -21 3 -46z"
            />
            <path id="svg_62" onClick={() => this.props.onFill(11)}
              fill={this.props.fillColors[11]}
              fill-rule="evenodd"
              stroke="#000000"
              stroke-width="8"
              d="M692 838 c-7 -7 -12 -20 -12 -30 0 -24 -8 -23 -30 5 -15 17 -22 20
-36 11 -30 -18 -27 -33 11 -69 40 -39 79 -45 111 -19 18 15 18 15 -3 5 -12 -6
-32 -11 -44 -11 -17 0 -19 3 -10 13 8 11 5 13 -19 9 -18 -3 -30 0 -30 7 0 15
21 23 66 24 44 2 65 27 45 51 -16 19 -33 20 -49 4z m46 -21 c4 -20 -25 -34
-40 -19 -15 15 -1 44 19 40 10 -2 19 -11 21 -21z m-107 -6 c-7 -5 -10 -14 -7
-20 4 -6 3 -11 -3 -11 -14 0 -23 18 -16 30 3 6 14 10 23 10 14 0 14 -2 3 -9z"
            />
            <path id="svg_63" onClick={() => this.props.onFill(12)}
              fill={this.props.fillColors[12]}
              fill-rule="evenodd"
              stroke="#000000"
              stroke-width="8"
              d="M700 810 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"
            />
            <path id="svg_64" onClick={() => this.props.onFill(13)}
              fill={this.props.fillColors[13]}
              fill-rule="evenodd"
              stroke="#000000"
              stroke-width="8"
            d="M688 703 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z" />
            <path id="svg_86" onClick={() => this.props.onFill(14)}
              fill={this.props.fillColors[14]}
              fill-rule="evenodd"
              stroke="#000000"
              stroke-width="8"
              d="M2055 665 c0 -13 3 -21 8 -18 4 2 7 10 7 18 0 8 -3 16 -7 18 -5 3 -8
-5 -8 -18z"
            />
            <path id="svg_65" onClick={() => this.props.onFill(15)}
              fill={this.props.fillColors[15]}
              fill-rule="evenodd"
              stroke="#000000"
              stroke-width="8"
              d="M276 567 c-11 -8 -16 -20 -13 -28 4 -10 6 -9 6 4 1 9 8 17 16 17 8 0
15 5 15 10 0 13 -3 13 -24 -3z"
            />
            <path id="svg_66" onClick={() => this.props.onFill(16)}
              fill={this.props.fillColors[16]}
              fill-rule="evenodd"
              stroke="#000000"
              stroke-width="8"
              d="M230 525 c-12 -15 -6 -35 12 -35 7 0 7 4 -1 13 -8 10 -7 17 1 25 7 7
9 12 6 12 -3 0 -11 -7 -18 -15z"
            />
            <path id="svg_67" onClick={() => this.props.onFill(17)}
              fill={this.props.fillColors[17]}
              fill-rule="evenodd"
              stroke="#000000"
              stroke-width="8"
              d="M606 358 c5 -8 1 -9 -12 -4 -11 4 1 -13 26 -38 56 -58 78 -61 25 -4
l-40 42 49 -42 c69 -59 78 -52 11 8 -54 49 -73 61 -59 38z"
            />
            <path id="svg_68" onClick={() => this.props.onFill(18)}
              fill={this.props.fillColors[18]}
              fill-rule="evenodd"
              stroke="#000000"
              stroke-width="8"
              d="M245 1718 c-3 -13 -5 -66 -3 -118 l3 -95 35 0 c34 0 35 1 38 43 3 41
4 42 38 42 31 0 34 2 34 30 0 28 -3 30 -35 30 -50 0 -48 28 3 32 32 3 37 7 40
31 l3 27 -75 0 c-70 0 -76 -2 -81 -22z m143 -5 c-2 -13 -14 -19 -41 -21 -32
-3 -37 -7 -37 -28 0 -21 5 -24 35 -24 28 0 35 -4 35 -20 0 -16 -7 -20 -35 -20
-34 0 -35 -1 -35 -40 0 -36 -2 -40 -25 -40 l-25 0 0 105 0 105 66 0 c57 0 65
-2 62 -17z"
            />
            <path id="svg_69" onClick={() => this.props.onFill(19)}
              fill={this.props.fillColors[19]}
              fill-rule="evenodd"
              stroke="#000000"
              stroke-width="8"
              d="M426 1724 c-10 -25 -7 -46 5 -38 12 7 7 -108 -6 -159 l-8 -28 54 3
c51 3 54 5 57 31 2 15 0 27 -5 27 -9 0 -8 118 1 127 3 4 6 17 6 30 0 21 -4 23
-49 23 -35 0 -51 -4 -55 -16z m94 -9 c0 -8 -4 -15 -10 -15 -6 0 -10 -32 -10
-75 0 -43 4 -75 10 -75 6 0 10 -7 10 -15 0 -11 -11 -15 -40 -15 -29 0 -40 4
-40 15 0 8 5 15 10 15 6 0 10 30 10 69 0 39 -4 73 -10 76 -5 3 -10 13 -10 21
0 10 12 14 40 14 29 0 40 -4 40 -15z"
            />
            <path id="svg_70" onClick={() => this.props.onFill(20)}
              fill={this.props.fillColors[20]}
              fill-rule="evenodd"
              stroke="#000000"
              stroke-width="8"
              d="M577 1733 c-4 -3 -7 -58 -7 -120 l0 -114 38 3 c36 3 37 4 36 41 -1
20 0 37 2 37 2 0 15 -18 29 -40 21 -34 30 -40 60 -40 18 0 36 4 39 8 2 4 -9
29 -25 56 -28 44 -29 49 -15 65 24 26 20 77 -6 95 -23 16 -138 23 -151 9z
m141 -19 c28 -19 29 -57 2 -84 l-21 -21 24 -32 c40 -53 41 -57 13 -57 -19 0
-32 10 -51 40 -14 22 -32 40 -40 40 -11 0 -15 -11 -15 -40 0 -33 -3 -40 -20
-40 -19 0 -20 7 -20 105 l0 105 53 0 c31 0 61 -6 75 -16z"
            />
            <path id="svg_71" onClick={() => this.props.onFill(21)}
              fill={this.props.fillColors[21]}
              fill-rule="evenodd"
              stroke="#000000"
              stroke-width="8"
              d="M630 1665 c0 -24 5 -35 14 -35 29 0 46 13 46 35 0 22 -17 35 -46 35
-9 0 -14 -11 -14 -35z m45 -4 c0 -23 -22 -24 -28 -1 -4 16 -1 20 11 18 9 -2
17 -10 17 -17z"
            />
            <path id="svg_72" onClick={() => this.props.onFill(22)}
              fill={this.props.fillColors[22]}
              fill-rule="evenodd"
              stroke="#000000"
              stroke-width="8"
              d="M805 1718 c-3 -13 -5 -66 -3 -118 l3 -95 75 0 c74 0 75 0 78 28 3 26
1 27 -37 27 -51 0 -58 27 -8 32 27 2 33 8 35 31 3 25 1 27 -32 27 -51 0 -49
28 2 32 32 3 37 7 40 31 l3 27 -75 0 c-70 0 -76 -2 -81 -22z m143 -5 c-2 -13
-14 -19 -41 -21 -32 -3 -37 -7 -37 -28 0 -21 5 -24 35 -24 24 0 35 -5 35 -15
0 -10 -11 -15 -35 -15 -32 0 -35 -2 -35 -30 0 -28 2 -30 40 -30 29 0 40 -4 40
-15 0 -12 -14 -15 -65 -15 l-65 0 0 105 0 105 66 0 c57 0 65 -2 62 -17z"
            />
            <path id="svg_73" onClick={() => this.props.onFill(23)}
            fill={this.props.fillColors[23]}
            fill-rule="evenodd"
            stroke="#000000"
            stroke-width="8"
              d="M66 1414 c-13 -33 -6 -44 27 -44 l32 0 -3 -91 -3 -90 38 3 38 3 3 88
3 87 29 0 c27 0 30 3 30 30 l0 30 -94 0 c-76 0 -95 -3 -100 -16z m184 -14 c0
-16 -7 -20 -30 -20 l-30 0 0 -87 c0 -87 0 -88 -25 -89 -25 -2 -25 -2 -25 87
l0 89 -30 0 c-23 0 -30 4 -30 20 0 18 7 20 85 20 78 0 85 -2 85 -20z"
            />
            <path id="svg_74" onClick={() => this.props.onFill(24)}
              fill={this.props.fillColors[24]}
              fill-rule="evenodd"
              stroke="#000000"
              stroke-width="8"
              d="M307 1423 c-4 -3 -7 -57 -7 -120 l0 -113 34 0 c34 0 35 1 38 43 l3
42 25 -42 c22 -38 29 -43 61 -43 20 0 38 3 42 6 3 3 -8 28 -25 55 -28 46 -29
51 -14 68 22 24 20 67 -4 91 -16 16 -33 20 -83 20 -35 0 -67 -3 -70 -7z m141
-19 c27 -19 29 -57 2 -84 -20 -20 -19 -20 10 -64 36 -53 36 -56 6 -56 -18 0
-31 11 -50 45 -35 59 -56 59 -56 1 0 -39 -2 -43 -22 -42 -22 1 -23 6 -26 86
-4 126 -2 130 61 130 31 0 62 -6 75 -16z"
            />
            <path id="svg_75" onClick={() => this.props.onFill(25)}
              fill={this.props.fillColors[25]}
              fill-rule="evenodd"
              stroke="#000000"
              stroke-width="8"
              d="M360 1356 c0 -29 4 -36 19 -36 10 0 24 7 32 16 16 20 1 48 -30 52
-18 3 -21 -1 -21 -32z m40 -6 c0 -11 -7 -20 -15 -20 -8 0 -15 9 -15 20 0 11 7
20 15 20 8 0 15 -9 15 -20z"
            />
            <path id="svg_76" onClick={() => this.props.onFill(27)}
              fill={this.props.fillColors[26]}
              fill-rule="evenodd"
              stroke="#000000"
              stroke-width="8"
              d="M534 1406 c-3 -15 -4 -60 -2 -102 4 -92 23 -114 95 -114 87 0 113 37
113 160 l0 80 -35 0 c-40 0 -43 -8 -47 -110 -3 -57 -5 -65 -23 -65 -18 0 -20
8 -25 85 l-5 85 -32 3 c-28 3 -33 -1 -39 -22z m56 -50 c0 -83 12 -116 43 -116
38 0 47 19 47 102 0 78 0 78 26 78 l27 0 -6 -87 c-5 -79 -9 -90 -32 -110 -36
-31 -88 -31 -120 2 -23 22 -25 32 -25 110 0 78 2 85 20 85 18 0 20 -7 20 -64z"
            />
            <path id="svg_77" onClick={() => this.props.onFill(28)}
              fill={this.props.fillColors[28]}
              fill-rule="evenodd"
              stroke="#000000"
              stroke-width="8"
              d="M842 1416 c-38 -21 -62 -66 -62 -119 0 -40 5 -54 29 -78 25 -24 38
-29 79 -29 69 0 82 7 82 41 0 28 -1 29 -37 23 -49 -7 -76 12 -76 54 0 49 19
65 70 57 l43 -6 0 35 0 36 -52 0 c-29 -1 -63 -6 -76 -14z m118 -19 c0 -20 -4
-23 -34 -19 -65 8 -100 -39 -75 -100 12 -30 43 -43 84 -36 19 4 25 1 25 -12 0
-39 -85 -42 -129 -4 -40 33 -49 81 -25 131 22 45 54 63 112 63 37 0 42 -3 42
-23z"
            />
            <path id="svg_78" onClick={() => this.props.onFill(29)}
              fill={this.props.fillColors[29]}
              fill-rule="evenodd"
              stroke="#000000"
              stroke-width="8"
              d="M1027 1423 c-4 -3 -7 -57 -7 -120 l0 -113 35 0 c34 0 35 1 35 37 l0
38 25 -38 c22 -32 31 -37 65 -37 23 0 40 5 40 11 0 6 -16 33 -35 59 -19 26
-35 52 -35 57 0 6 16 31 35 56 19 25 35 48 35 51 0 3 -18 6 -39 6 -36 0 -42
-4 -65 -42 l-26 -43 0 43 c0 39 -2 42 -28 42 -16 0 -32 -3 -35 -7z m53 -55 l0
-53 35 53 c27 40 41 52 61 52 28 0 27 -1 -18 -64 l-28 -39 33 -46 c49 -69 49
-68 18 -68 -24 0 -35 10 -65 55 l-36 55 0 -55 c0 -51 -2 -55 -22 -53 -22 2
-23 6 -26 108 l-3 107 26 0 c24 0 25 -3 25 -52z"
            />
            <path id="svg_79" onClick={() => this.props.onFill(30)}
              fill={this.props.fillColors[30]}
              fill-rule="evenodd"
              stroke="#000000"
              stroke-width="8"
              d="M172 709 c2 -6 8 -10 13 -10 5 0 11 4 13 10 2 6 -4 11 -13 11 -9 0
-15 -5 -13 -11z"
            />
            <path id="svg_80" onClick={() => this.props.onFill(31)}
              fill={this.props.fillColors[31]}
              fill-rule="evenodd"
              stroke="#000000"
              stroke-width="8"
              d="M220 690 c0 -13 5 -20 13 -17 6 2 12 10 12 17 0 7 -6 15 -12 18 -8 2
-13 -5 -13 -18z"
            />
            <path id="svg_81" onClick={() => this.props.onFill(32)}
              fill={this.props.fillColors[32]}
              fill-rule="evenodd"
              stroke="#000000"
              stroke-width="8"
              d="M60 520 c0 -5 14 -10 30 -10 17 0 30 5 30 10 0 6 -13 10 -30 10 -16
0 -30 -4 -30 -10z"
            />
            <path id="svg_82" onClick={() => this.props.onFill(33)}
              fill={this.props.fillColors[33]}
              fill-rule="evenodd"
              stroke="#000000"
              stroke-width="8"
              d="M137 404 c-13 -13 -7 -24 14 -24 11 0 19 5 17 12 -5 14 -22 21 -31
12z"
            />
            <path id="svg_83" onClick={() => this.props.onFill(34)}
              fill={this.props.fillColors[34]}
              fill-rule="evenodd"
              stroke="#000000"
              stroke-width="8"
              stroke-linecap="round"
              stroke-dashoffset="0"
              d="M2573 57 c-9 -15 5 -20 64 -23 36 -1 61 2 65 9 6 9 8 9 8 0 0 -7 5
-13 10 -13 6 0 10 7 10 15 0 9 -10 15 -26 15 -14 0 -23 -4 -19 -10 3 -6 2 -10
-4 -10 -5 0 -11 5 -13 11 -5 14 -87 19 -95 6z"
            />
            <path id="svg_84" onClick={() => this.props.onFill(35)}
              fill={this.props.fillColors[35]}
              fill-rule="evenodd"
              stroke-width="1.3"
              stroke-linecap="round"
              stroke-dashoffset="0"
              d="M2765 53 c-8 -8 -15 -9 -18 -3 -3 6 -4 5 -3 -2 3 -15 35 -17 54 -4 7
5 12 5 12 -1 0 -5 19 -8 43 -7 23 1 50 3 60 3 19 1 24 17 5 19 -7 0 -26 3 -41
5 -19 3 -31 -1 -34 -10 -5 -11 -8 -12 -14 -2 -10 17 -48 19 -64 2z"
            />
          </g>
        </g>
      </svg>
    );
  }
}