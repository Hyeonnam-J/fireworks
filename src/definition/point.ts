const POINT = {
    RED: [
        { x: 0, y: 0, z: 0 },

    ],

    BLUE: [
        { x: 0, y: 0, z: 0 },

    ],

    LAUNCHING_BASE: {
        // Face to x between z.
        ONE: { x: -15, y: 0, z: 25 },
        TWO: { x: -11, y: 0, z: 21 },
        THREE: { x: -7, y: 0, z: 17 },
        FOUR: { x: -3, y: 0, z: 13 },
        FIVE: { x: 1, y: 0, z: 9 },
        SIX: { x: 5, y: 0, z: 5 },
        SEVEN: { x: 9, y: 0, z: 1 },
        EIGHT: { x: 13, y: 0, z: -3 },
        NINE: { x: 17, y: 0, z: -7 },
        TEN: { x: 21, y: 0, z: -11 },
        ELEVEN: { x: 25, y: 0, z: -15 },

        // Face to z.
        // ONE: { x: -20, y: 0, z: 7 },
        // TWO: { x: -16, y: 0, z: 7 },
        // THREE: { x: -12, y: 0, z: 7 },
        // FOUR: { x: -8, y: 0, z: 7 },
        // FIVE: { x: -4, y: 0, z: 7 },
        // SIX: { x: 0, y: 0, z: 7 },
        // SEVEN: { x: 4, y: 0, z: 7 },
        // EIGHT: { x: 8, y: 0, z: 7 },
        // NINE: { x: 12, y: 0, z: 7 },
        // TEN: { x: 16, y: 0, z: 7 },
        // ELEVEN: { x: 20, y: 0, z: 7 },
    },

    LAUNCHING_OFFSET: {
        LOWEST: { x: 0, y: 14, z: 0 },
        LOW: { x: 0, y: 15, z: 0 },
        MEDIUM: { x: 0, y: 16, z: 0 },
        HIGH: { x: 0, y: 17, z: 0 },
        HIGHEST: { x: 0, y: 18, z: 0 }
    },

    EXPLOSION_OFFSET: {
        PETITE_BURST: [
            // pole
            { x: 0.00, y: 2.5, z: 0.00 },
            { x: 0.00, y: -2.5, z: 0.00 },

            // 90
            { x: 0.00, y: 2.17, z: 1.25 },
            { x: 0.00, y: 2.17, z: -1.25 },
            { x: 1.25, y: 2.17, z: 0.00 },
            { x: -1.25, y: 2.17, z: 0.00 },

            { x: 0.00, y: -2.17, z: 1.25 },
            { x: 0.00, y: -2.17, z: -1.25 },
            { x: 1.25, y: -2.17, z: 0.00 },
            { x: -1.25, y: -2.17, z: 0.00 },

            // 45
            { x: 0.00, y: 1.25, z: 2.17 },
            { x: 1.55, y: 1.25, z: 1.55 },
            { x: -1.55, y: 1.25, z: 1.55 },
            { x: 2.15, y: 1.25, z: 0.00 },
            { x: -2.15, y: 1.25, z: 0.00 },
            { x: 1.55, y: 1.25, z: -1.55 },
            { x: -1.55, y: 1.25, z: -1.55 },
            { x: 0.00, y: 1.25, z: -2.17 },

            { x: 0.00, y: -1.25, z: 2.17 },
            { x: 1.55, y: -1.25, z: 1.55 },
            { x: -1.55, y: -1.25, z: 1.55 },
            { x: 2.15, y: -1.25, z: 0.00 },
            { x: -2.15, y: -1.25, z: 0.00 },
            { x: 1.55, y: -1.25, z: -1.55 },
            { x: -1.55, y: -1.25, z: -1.55 },
            { x: 0.00, y: -1.25, z: -2.17 },

            // 30
            { x: 2.50, y: 0, z: 0.00 },
            { x: 2.17, y: 0, z: 1.25 },
            { x: 1.25, y: 0, z: 2.17 },
            { x: 0.00, y: 0, z: 2.50 },
            { x: -1.25, y: 0, z: 2.17 },
            { x: -2.17, y: 0, z: 1.25 },
            { x: -2.50, y: 0, z: 0.00 },
            { x: -2.17, y: 0, z: -1.25 },
            { x: -1.25, y: 0, z: -2.17 },
            { x: 0.00, y: 0, z: -2.50 },
            { x: 1.25, y: 0, z: -2.17 },
            { x: 2.17, y: 0, z: -1.25 }
        ],
        BURST: [
            // pole.
            { x: 0.00, y: 5, z: 0.00 },
            { x: 0.00, y: -5, z: 0.00 },

            // 90.
            { x: 0, y: 4.3, z: 2.5 },
            { x: 0.00, y: 4.3, z: -2.50 },
            { x: 2.5, y: 4.3, z: 0 },
            { x: -2.5, y: 4.3, z: 0 },

            { x: 0, y: -4.3, z: 2.5 },
            { x: 0.00, y: -4.3, z: -2.50 },
            { x: 2.5, y: -4.3, z: 0 },
            { x: -2.5, y: -4.3, z: 0 },

            // 45.
            { x: 0.00, y: 2.5, z: 4.33 },
            { x: 3.1, y: 2.5, z: 3.1 },
            { x: -3.1, y: 2.5, z: 3.1 },
            { x: 4.3, y: 2.5, z: 0 },
            { x: -4.3, y: 2.5, z: 0 },
            { x: 3.1, y: 2.5, z: -3.1 },
            { x: -3.1, y: 2.5, z: -3.1 },
            { x: 0.00, y: 2.5, z: -4.33 },

            { x: 0.00, y: -2.5, z: 4.33 },
            { x: 3.1, y: -2.5, z: 3.1 },
            { x: -3.1, y: -2.5, z: 3.1 },
            { x: 4.3, y: -2.5, z: 0 },
            { x: -4.3, y: -2.5, z: 0 },
            { x: 3.1, y: -2.5, z: -3.1 },
            { x: -3.1, y: -2.5, z: -3.1 },
            { x: 0.00, y: -2.5, z: -4.33 },

            // 30.
            { x: 5.00, y: 0, z: 0.00 },
            { x: 4.33, y: 0, z: 2.50 },
            { x: 2.50, y: 0, z: 4.33 },
            { x: 0.00, y: 0, z: 5.00 },
            { x: -2.50, y: 0, z: 4.33 },
            { x: -4.33, y: 0, z: 2.50 },
            { x: -5.00, y: 0, z: 0.00 },
            { x: -4.33, y: 0, z: -2.50 },
            { x: -2.50, y: 0, z: -4.33 },
            { x: 0.00, y: 0, z: -5.00 },
            { x: 2.50, y: 0, z: -4.33 },
            { x: 4.33, y: 0, z: -2.50 },
        ],
        ERUPT: [
            { x: 0, y: 21, z: 0 },
            // { x: 2.86, y: 21, z: -1.01 }, // add.
            // { x: 0.51, y: 21, z: -2.94 },
            // { x: -2.31, y: 21, z: -1.94 },
            // { x: -2.86, y: 21, z: 1.01 },
            // { x: -0.51, y: 21, z: 2.94 },
            // { x: 2.31, y: 21, z: 1.94 },
            // { x: 0, y: 21, z: 0 },

            // { x: 2.34, y: 20, z: 0.44 }, // 10°
            // { x: 0.86, y: 20, z: 2.35 }, // 70°
            // { x: -1.60, y: 20, z: 1.88 }, // 130°
            // { x: -0.86, y: 20, z: -2.35 }, // 250°
            // { x: -2.34, y: 20, z: -0.44 }, // 190°
            // { x: 1.60, y: 20, z: -1.88 }, // 310°
            // { x: 0, y: 20, z: 0 },

            // { x: 1.41, y: 19, z: 1.41 }, // 45°
            // { x: -1.41, y: 19, z: -1.41 }, // 135°
            // { x: 1.41, y: 19, z: -1.41 }, // 225°
            // { x: -1.41, y: 19, z: 1.41 }, // 315°

            // { x: 1.50, y: 18, z: 0.13 }, // 5°
            // { x: -0.13, y: 18, z: 1.50 }, // 95°
            // { x: -1.50, y: 18, z: -0.13 }, // 185°
            // { x: 0.13, y: 18, z: -1.50 }, // 275°

            // { x: 0.4, y: 17, z: 0.8 }, // 60°
            // { x: -1, y: 17, z: 0 }, // 180°
            // { x: 0.4, y: 17, z: -0.8 }, // 300°

            // { x: 0.5, y: 16, z: 0 }, // 0°
            // { x: -0.2, y: 16, z: 0.4 }, // 120°
            // { x: -0.2, y: 16, z: -0.4 }, // 240°

            // { x: 0, y: 15, z: 0 }, // 0
        ],
        BLOOM: [
            // // 15.
            // { x: 1.5, y: 16, z: 7.5 },
            // { x: 1.75, y: 15.5, z: 7.25 },
            // { x: 1.5, y: 15.5, z: 7 },
            // { x: 1.5, y: 14, z: 5.5 },
            // { x: 1.75, y: 13.5, z: 5.25 },
            // { x: 1.5, y: 13.5, z: 5 },

            // // 60.
            // { x: 9, y: 16, z: 6 },
            // { x: 9, y: 15.5, z: 5.5 },
            // { x: 8.5, y: 15.5, z: 5.5 },
            // { x: 7, y: 14, z: 4 },
            // { x: 7, y: 13.5, z: 3.5 },
            // { x: 6.5, y: 13.5, z: 3.5 },

            // // 105.
            // { x: 7.5, y: 16, z: -1.5 },
            // { x: 7.25, y: 15.5, z: -2 },
            // { x: 7, y: 15.5, z: -1.5 },
            // { x: 5.5, y: 14, z: -1.5 },
            // { x: 5.25, y: 13.5, z: -1.75 },
            // { x: 5, y: 13.5, z: -1.5 },

            // // 150.
            // { x: 6, y: 16, z: -9 },
            // { x: 5.5, y: 15.5, z: -9 },
            // { x: 5.5, y: 15.5, z: -8.5 },
            // { x: 4, y: 14, z: -7 },
            // { x: 3.5, y: 13.5, z: -7 },
            // { x: 3.5, y: 13.5, z: -6.5 },

            // // 195.
            // { x: -1.5, y: 16, z: -7.5 },
            // { x: -1.75, y: 15.5, z: -7.25 },
            // { x: -1.5, y: 15.5, z: -7 },
            // { x: -1.5, y: 14, z: -5.5 },
            // { x: -1.75, y: 13.5, z: -5.25 },
            // { x: -1.5, y: 13.5, z: -5 },

            // // 240.
            // { x: -9, y: 16, z: -6 },
            // { x: -9, y: 15.5, z: -5.5 },
            // { x: -8.5, y: 15.5, z: -5.5 },
            // { x: -7, y: 14, z: -4 },
            // { x: -7, y: 13.5, z: -3.5 },
            // { x: -6.5, y: 13.5, z: -3.5 },

            // // 285.
            // { x: -7.5, y: 16, z: 1.5 },
            // { x: -7.25, y: 15.5, z: 1.75 },
            // { x: -7, y: 15.5, z: 1.5 },
            // { x: -5.5, y: 14, z: 1.5 },
            // { x: -5.25, y: 13.5, z: 1.75 },
            // { x: -5, y: 13.5, z: 1.5 },

            // // 330.
            // { x: -6, y: 16, z: 9 },
            // { x: -5.5, y: 15.5, z: 9 },
            // { x: -5.5, y: 15.5, z: 8.5 },
            // { x: -4, y: 14, z: 7 },
            // { x: -3.5, y: 13.5, z: 7 },
            // { x: -3.5, y: 13.5, z: 6.5 },

            // 15.
            { x: 3, y: 16, z: 15 },
            { x: 3.5, y: 15.5, z: 14.5 },
            { x: 3, y: 15.5, z: 14 },
            { x: 3, y: 14, z: 11 },
            { x: 3.5, y: 13.5, z: 10.5 },
            { x: 3, y: 13.5, z: 10 },

            // 60.
            { x: 18, y: 16, z: 12 },
            { x: 18, y: 15.5, z: 11 },
            { x: 17, y: 15.5, z: 11 },
            { x: 14, y: 14, z: 8 },
            { x: 14, y: 13.5, z: 7 },
            { x: 13, y: 13.5, z: 7 },

            // 105.
            { x: 15, y: 16, z: -3 },
            { x: 14.5, y: 15.5, z: -4 },
            { x: 14, y: 15.5, z: -3 },
            { x: 11, y: 14, z: -3 },
            { x: 10.5, y: 13.5, z: -4 },
            { x: 10, y: 13.5, z: -3 },

            // 150.
            { x: 12, y: 16, z: -18 },
            { x: 11, y: 15.5, z: -18 },
            { x: 11, y: 15.5, z: -17 },
            { x: 8, y: 14, z: -14 },
            { x: 7, y: 13.5, z: -14 },
            { x: 7, y: 13.5, z: -13 },

            // 195.
            { x: -3, y: 16, z: -15 },
            { x: -3.5, y: 15.5, z: -14.5 },
            { x: -3, y: 15.5, z: -14 },
            { x: -3, y: 14, z: -11 },
            { x: -3.5, y: 13.5, z: -10.5 },
            { x: -3, y: 13.5, z: -10 },

            // 240.
            { x: -18, y: 16, z: -12 },
            { x: -18, y: 15.5, z: -11 },
            { x: -17, y: 15.5, z: -11 },
            { x: -14, y: 14, z: -8 },
            { x: -14, y: 13.5, z: -7 },
            { x: -13, y: 13.5, z: -7 },

            // 285.
            { x: -15, y: 16, z: 3 },
            { x: -14.5, y: 15.5, z: 3.5 },
            { x: -14, y: 15.5, z: 3 },
            { x: -11, y: 14, z: 3 },
            { x: -10.5, y: 13.5, z: 3.5 },
            { x: -10, y: 13.5, z: 3 },

            // 330.
            { x: -12, y: 16, z: 18 },
            { x: -11, y: 15.5, z: 18 },
            { x: -11, y: 15.5, z: 17 },
            { x: -8, y: 14, z: 14 },
            { x: -7, y: 13.5, z: 14 },
            { x: -7, y: 13.5, z: 13 },
        ],
        HUGE_BURST: [
            // Baseline.
            { x: 0.00, y: 0, z: -10.00 },   // theta 180, phi 90.  
            { x: 0.00, y: 2.6, z: -9.6 },   // theta 165, phi 90.
            { x: 0.00, y: 5.00, z: -8.66 }, // theta 150, phi 90.
            { x: 0.00, y: 7.00, z: -7.1 }, // theta 135, phi 90.
            { x: 0, y: 8.66, z: -5.00 }, // theta 120, phi 90.
            { x: 0, y: 9.7, z: -2.6 }, // theta 105, phi 90.
            { x: 0.00, y: 10.00, z: 0.00 }, // theta 90, phi 90.
            { x: 0, y: 9.7, z: 2.6 }, // theta 75, phi 90.
            { x: 0, y: 8.66, z: 5.00 }, // theta 60, phi 90.
            { x: 0.00, y: 7.00, z: 7.1 }, // theta 45, phi 90.
            { x: 0.00, y: 5.00, z: 8.66 }, // theta 30, phi 90.
            { x: 0.00, y: 2.6, z: 9.6 },   // theta 15, phi 90.
            { x: 0.00, y: 0.00, z: 10.00 },  // theta 0, phi 90.
            { x: 0.00, y: -2.6, z: 9.6 },   // theta -15, phi 90.
            { x: 0.00, y: -5.00, z: 8.66 }, // theta -30, phi 90.
            { x: 0.00, y: -7, z: 7.1 }, // theta -45, phi 90.
            { x: 0, y: -8.66, z: 5.00 }, // theta -60, phi 90.
            { x: 0, y: -9.7, z: 2.6 }, // theta -75, phi 90.
            { x: 0.00, y: -10.00, z: 0.00 }, // theta -90, phi 90.
            { x: 0, y: -9.7, z: -2.6 }, // theta -105, phi 90.
            { x: 0, y: -8.66, z: -5.00 }, // theta -120, phi 90.
            { x: 0.00, y: -7, z: -7.1 }, // theta -135, phi 90.
            { x: 0.00, y: -5.00, z: -8.66 }, // theta -150, phi 90.
            { x: 0.00, y: -2.6, z: -9.6 },   // theta -165, phi 90.

            // theta 0, phi 90.
            { x: 10.00, y: 0, z: 0.00 },    // 90
            { x: 9.66, y: 0, z: 2.6 },      // 75
            { x: 8.66, y: 0, z: 5.00 },     // 60
            { x: 7.07, y: 0, z: 7.07 },     // 45
            { x: 5.00, y: 0, z: 8.66 },     // 30
            { x: 2.59, y: 0, z: 9.66 },     // 15
            // { x: 0.00, y: 0, z: 10.00 },
            { x: -2.59, y: 0, z: 9.66 },    // -15
            { x: -5.00, y: 0, z: 8.66 },    // -30
            { x: -7.07, y: 0, z: 7.07 },    // -45
            { x: -8.66, y: 0, z: 5.00 },    // -60
            { x: -9.66, y: 0, z: 2.6 },     // -75
            { x: -10.00, y: 0, z: 0.00 },   // -90
            { x: -9.66, y: 0, z: -2.6 },
            { x: -8.66, y: 0, z: -5.00 },
            { x: -7.07, y: 0, z: -7.07 },
            { x: -5.00, y: 0, z: -8.66 },
            { x: -2.59, y: 0, z: -9.66 },
            // { x: 0.00, y: 0, z: -10.00 },
            { x: 2.59, y: 0, z: -9.66 },
            { x: 5.00, y: 0, z: -8.66 },
            { x: 7.07, y: 0, z: -7.07 },
            { x: 8.66, y: 0, z: -5.00 },
            { x: 9.66, y: 0, z: -2.6 },
            { x: 10.00, y: 0, z: 0.00 },

            // theta 15, phi 90.
            { x: 0.00, y: 2.6, z: 9.6 },
            { x: 2.48, y: 2.6, z: 9.27 },    // 15
            { x: 4.8, y: 2.6, z: 8.3 },    // 30
            { x: 6.79, y: 2.6, z: 6.79 },    // 45
            { x: 8.3, y: 2.6, z: 4.8 },    // 60
            { x: 9.27, y: 2.6, z: 2.48 },    // 75
            { x: 9.6, y: 2.6, z: 0 },    // 90
            { x: -2.48, y: 2.6, z: 9.27 },
            { x: -4.8, y: 2.6, z: 8.3 },
            { x: -6.79, y: 2.6, z: 6.79 },
            { x: -8.3, y: 2.6, z: 4.8 },
            { x: -9.27, y: 2.6, z: 2.48 },
            { x: 4.8, y: 2.6, z: -8.3 },
            { x: 8.3, y: 2.6, z: -4.8 },
            { x: -4.8, y: 2.6, z: -8.3 },
            { x: -8.3, y: 2.6, z: -4.8 },
            { x: 2.48, y: 2.6, z: -9.27 },
            { x: 6.79, y: 2.6, z: -6.79 },
            { x: 9.27, y: 2.6, z: -2.48 },
            { x: -2.48, y: 2.6, z: -9.27 },
            { x: -6.79, y: 2.6, z: -6.79 },
            { x: -9.27, y: 2.6, z: -2.48 },
            { x: -9.6, y: 2.6, z: 0 },

            // theta -15, phi 90.
            { x: 0.00, y: -2.6, z: 9.6 },
            { x: 2.48, y: -2.6, z: 9.27 },    // 15
            { x: 4.8, y: -2.6, z: 8.3 },    // 30
            { x: 6.79, y: -2.6, z: 6.79 },    // 45
            { x: 8.3, y: -2.6, z: 4.8 },    // 60
            { x: 9.27, y: -2.6, z: 2.48 },    // 75
            { x: 9.6, y: -2.6, z: 0 },    // 90
            { x: -2.48, y: -2.6, z: 9.27 },
            { x: -4.8, y: -2.6, z: 8.3 },
            { x: -6.79, y: -2.6, z: 6.79 },
            { x: -8.3, y: -2.6, z: 4.8 },
            { x: -9.27, y: -2.6, z: 2.48 },
            { x: 4.8, y: -2.6, z: -8.3 },
            { x: 8.3, y: -2.6, z: -4.8 },
            { x: -4.8, y: -2.6, z: -8.3 },
            { x: -8.3, y: -2.6, z: -4.8 },
            { x: 2.48, y: -2.6, z: -9.27 },
            { x: 6.79, y: -2.6, z: -6.79 },
            { x: 9.27, y: -2.6, z: -2.48 },
            { x: -2.48, y: -2.6, z: -9.27 },
            { x: -6.79, y: -2.6, z: -6.79 },
            { x: -9.27, y: -2.6, z: -2.48 },
            { x: -9.6, y: -2.6, z: 0 },

            // theta 30, phi 90.
            // { x: 0.00, y: 5.00, z: 8.66 },
            { x: 4.3, y: 5.00, z: 7.44 },      // 30
            { x: 7.44, y: 5.00, z: 4.3 },      // 60
            { x: 8.60, y: 5.00, z: 0 },        // 90
            { x: -8.60, y: 5.00, z: 0 },
            { x: -7.44, y: 5.00, z: 4.3 },
            { x: -4.3, y: 5.00, z: 7.44 },
            { x: -4.3, y: 5.00, z: -7.44 },
            { x: -7.44, y: 5.00, z: -4.3 },
            { x: 7.44, y: 5.00, z: -4.3 },
            { x: 4.3, y: 5.00, z: -7.44 },
            { x: -8.60, y: 5.00, z: 0 },
            // { x: 0.00, y: 5.00, z: -8.66 },

            // theta -30, phi 90.
            // { x: 0.00, y: -5, z: 8.66 },
            { x: 4.3, y: -5, z: 7.44 },      // 30
            { x: 7.44, y: -5, z: 4.3 },      // 60
            { x: 8.60, y: -5, z: 0 },        // 90
            { x: -8.60, y: -5, z: 0 },
            { x: -7.44, y: -5, z: 4.3 },
            { x: -4.3, y: -5, z: 7.44 },
            { x: -4.3, y: -5, z: -7.44 },
            { x: -7.44, y: -5, z: -4.3 },
            { x: 7.44, y: -5, z: -4.3 },
            { x: 4.3, y: -5, z: -7.44 },
            { x: -8.60, y: -5, z: 0 },
            // { x: 0.00, y: -5, z: -8.66 },

            // theta 45, phi 90.
            { x: 3.55, y: 7.00, z: 6.14 },     // 30
            { x: 6.14, y: 7.00, z: 3.55 },     // 60
            { x: 7.1, y: 7.00, z: 0 },         // 90
            { x: -7.1, y: 7.00, z: 0 },
            { x: -3.55, y: 7.00, z: 6.14 },
            { x: -6.14, y: 7.00, z: 3.55 },
            { x: 3.55, y: 7.00, z: -6.14 },
            { x: 6.14, y: 7.00, z: -3.55 },
            { x: -3.55, y: 7.00, z: -6.14 },
            { x: -6.14, y: 7.00, z: -3.55 },

            // theta -45, phi 90.
            { x: 3.55, y: -7, z: 6.14 },     // 30
            { x: 6.14, y: -7, z: 3.55 },     // 60
            { x: 7.1, y: -7, z: 0 },         // 90
            { x: -7.1, y: -7, z: 0 },
            { x: -3.55, y: -7, z: 6.14 },
            { x: -6.14, y: -7, z: 3.55 },
            { x: 3.55, y: -7, z: -6.14 },
            { x: 6.14, y: -7, z: -3.55 },
            { x: -3.55, y: -7, z: -6.14 },
            { x: -6.14, y: -7, z: -3.55 },

            // theta 60, phi 90.
            // { x: 0, y: 8.66, z: 5.00 },
            // { x: 0.00, y: 8.66, z: -5.00 },
            { x: 5.00, y: 8.66, z: 0 },
            { x: 3.53, y: 8.66, z: 3.53 },
            { x: 3.53, y: 8.66, z: -3.53 },
            { x: -3.53, y: 8.66, z: 3.53 },
            { x: -3.53, y: 8.66, z: -3.53 },
            { x: -5.00, y: 8.66, z: 0 },

            // theta -60, phi 90.
            // { x: 0, y: -8.66, z: 5.00 },
            // { x: 0.00, y: -8.66, z: -5.00 },
            { x: 5.00, y: -8.66, z: 0 },
            { x: 3.53, y: -8.66, z: 3.53 },
            { x: 3.53, y: -8.66, z: -3.53 },
            { x: -3.53, y: -8.66, z: 3.53 },
            { x: -3.53, y: -8.66, z: -3.53 },
            { x: -5.00, y: -8.66, z: 0 },

            // theta 75, phi 90.
            // { x: 0, y: 9.7, z: 2.6 },   // 0.
            { x: 1.83, y: 9.7, z: 1.83 },      // 45
            { x: -1.83, y: 9.7, z: 1.83 },
            { x: 1.83, y: 9.7, z: -1.83 },
            { x: -1.83, y: 9.7, z: -1.83 },
            { x: 2.6, y: 9.7, z: 0 },      // 90
            { x: -2.6, y: 9.7, z: 0 },

            // theta -75, phi 90.
            // { x: 0, y: -9.7, z: 2.6 },   // 0.
            { x: 1.83, y: -9.7, z: 1.83 },      // 45
            { x: -1.83, y: -9.7, z: 1.83 },
            { x: 1.83, y: -9.7, z: -1.83 },
            { x: -1.83, y: -9.7, z: -1.83 },
            { x: 2.6, y: -9.7, z: 0 },      // 90
            { x: -2.6, y: -9.7, z: 0 },
        ],
        CHAIN_BURST: {
            ORIGIN: [
                { x: 1, y: 2, z: 5 },
                { x: -1, y: 2, z: -4.5 },
                { x: -4.5, y: 2, z: -1 },
                { x: 5, y: 2, z: 1 },
                { x: -4, y: 2, z: 3 },
                { x: 3, y: 2, z: -4 },
            ],
            OFFSET: [
                { x: 0.65, y: 14, z: 2.42 },  // 75°
                { x: -2.35, y: 14, z: 0.86 },  // 160°
                { x: -1.44, y: 14, z: -2.05 }, // 235°
                { x: 1.92, y: 14, z: -1.61 }, // 320°

                { x: 5.00, y: 12, z: 0.00 }, // 0°
                { x: 4.33, y: 12, z: 2.50 }, // 30°
                { x: 2.50, y: 12, z: 4.33 }, // 60°
                { x: 0.00, y: 12, z: 5.00 }, // 90°
                { x: -2.50, y: 12, z: 4.33 }, // 120°
                { x: -4.33, y: 12, z: 2.50 }, // 150°
                { x: -5.00, y: 12, z: 0.00 }, // 180°
                { x: -4.33, y: 12, z: -2.50 }, // 210°
                { x: -2.50, y: 12, z: -4.33 }, // 240°
                { x: -0.00, y: 12, z: -5.00 }, // 270°
                { x: 2.50, y: 12, z: -4.33 }, // 300°
                { x: 4.33, y: 12, z: -2.50 }, // 330°

                { x: 3.50, y: 10, z: 0.00 },  // 0°
                { x: 2.48, y: 10, z: 2.48 },  // 45°
                { x: 0.00, y: 10, z: 3.50 },  // 90°
                { x: -2.48, y: 10, z: 2.48 }, // 135°
                { x: -3.50, y: 10, z: 0.00 }, // 180°
                { x: -2.48, y: 10, z: -2.48 }, // 225°
                { x: 0.00, y: 10, z: -3.50 },  // 270°
                { x: 2.48, y: 10, z: -2.48 }, // 315°
            ],
        },
    }
}

export default POINT

// Back up.
// { x: 10.0, y: 12, z: 0.0 }, // 0°
// { x: 9.96, y: 12, z: 0.87 }, // 5°
// { x: 9.85, y: 12, z: 1.74 }, // 10°
// { x: 9.66, y: 12, z: 2.59 }, // 15°
// { x: 9.4, y: 12, z: 3.42 }, // 20°
// { x: 9.06, y: 12, z: 4.23 }, // 25°
// { x: 8.66, y: 12, z: 5.0 }, // 30°
// { x: 8.19, y: 12, z: 5.74 }, // 35°
// { x: 7.66, y: 12, z: 6.43 }, // 40°
// { x: 7.07, y: 12, z: 7.07 }, // 45°
// { x: 6.43, y: 12, z: 7.66 }, // 50°
// { x: 5.74, y: 12, z: 8.19 }, // 55°
// { x: 5.0, y: 12, z: 8.66 }, // 60°
// { x: 4.23, y: 12, z: 9.06 }, // 65°
// { x: 3.42, y: 12, z: 9.4 }, // 70°
// { x: 2.59, y: 12, z: 9.66 }, // 75°
// { x: 1.74, y: 12, z: 9.85 }, // 80°
// { x: 0.87, y: 12, z: 9.96 }, // 85°
// { x: 0.0, y: 12, z: 10.0 }, // 90°
// { x: -0.87, y: 12, z: 9.96 }, // 95°
// { x: -1.74, y: 12, z: 9.85 }, // 100°
// { x: -2.59, y: 12, z: 9.66 }, // 105°
// { x: -3.42, y: 12, z: 9.4 }, // 110°
// { x: -4.23, y: 12, z: 9.06 }, // 115°
// { x: -5.0, y: 12, z: 8.66 }, // 120°
// { x: -5.74, y: 12, z: 8.19 }, // 125°
// { x: -6.43, y: 12, z: 7.66 }, // 130°
// { x: -7.07, y: 12, z: 7.07 }, // 135°
// { x: -7.66, y: 12, z: 6.43 }, // 140°
// { x: -8.19, y: 12, z: 5.74 }, // 145°
// { x: -8.66, y: 12, z: 5.0 }, // 150°
// { x: -9.06, y: 12, z: 4.23 }, // 155°
// { x: -9.4, y: 12, z: 3.42 }, // 160°
// { x: -9.66, y: 12, z: 2.59 }, // 165°
// { x: -9.85, y: 12, z: 1.74 }, // 170°
// { x: -9.96, y: 12, z: 0.87 }, // 175°
// { x: -10.0, y: 12, z: 0.0 }, // 180°
// { x: -9.96, y: 12, z: -0.87 }, // 185°
// { x: -9.85, y: 12, z: -1.74 }, // 190°
// { x: -9.66, y: 12, z: -2.59 }, // 195°
// { x: -9.4, y: 12, z: -3.42 }, // 200°
// { x: -9.06, y: 12, z: -4.23 }, // 205°
// { x: -8.66, y: 12, z: -5.0 }, // 210°
// { x: -8.19, y: 12, z: -5.74 }, // 215°
// { x: -7.66, y: 12, z: -6.43 }, // 220°
// { x: -7.07, y: 12, z: -7.07 }, // 225°
// { x: -6.43, y: 12, z: -7.66 }, // 230°
// { x: -5.74, y: 12, z: -8.19 }, // 235°
// { x: -5.0, y: 12, z: -8.66 }, // 240°
// { x: -4.23, y: 12, z: -9.06 }, // 245°
// { x: -3.42, y: 12, z: -9.4 }, // 250°
// { x: -2.59, y: 12, z: -9.66 }, // 255°
// { x: -1.74, y: 12, z: -9.85 }, // 260°
// { x: -0.87, y: 12, z: -9.96 }, // 265°
// { x: -0.0, y: 12, z: -10.0 }, // 270°
// { x: 0.87, y: 12, z: -9.96 }, // 275°
// { x: 1.74, y: 12, z: -9.85 }, // 280°
// { x: 2.59, y: 12, z: -9.66 }, // 285°
// { x: 3.42, y: 12, z: -9.4 }, // 290°
// { x: 4.23, y: 12, z: -9.06 }, // 295°
// { x: 5.0, y: 12, z: -8.66 }, // 300°
// { x: 5.74, y: 12, z: -8.19 }, // 305°
// { x: 6.43, y: 12, z: -7.66 }, // 310°
// { x: 7.07, y: 12, z: -7.07 }, // 315°
// { x: 7.66, y: 12, z: -6.43 }, // 320°
// { x: 8.19, y: 12, z: -5.74 }, // 325°
// { x: 8.66, y: 12, z: -5.0 }, // 330°
// { x: 9.06, y: 12, z: -4.23 }, // 335°
// { x: 9.4, y: 12, z: -3.42 }, // 340°
// { x: 9.66, y: 12, z: -2.59 }, // 345°
// { x: 9.85, y: 12, z: -1.74 }, // 350°
// { x: 9.96, y: 12, z: -0.87 },  // 355°