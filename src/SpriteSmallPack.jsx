const prefix = 'img';

const files = {
    byId: {
        'activity': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M22 12L18 12 15 21 9 3 6 12 2 12"/>'
        },
        'airplay': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"/><path xmlns="http://www.w3.org/2000/svg" d="M12 15L17 21 7 21 12 15z"/>'
        },
        'alert-circle': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="12" r="10"/><path xmlns="http://www.w3.org/2000/svg" d="M12 8L12 12"/><path xmlns="http://www.w3.org/2000/svg" d="M12 16L12.01 16"/>'
        },
        'alert-octagon': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M7.86 2L16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2z"/><path xmlns="http://www.w3.org/2000/svg" d="M12 8L12 12"/><path xmlns="http://www.w3.org/2000/svg" d="M12 16L12.01 16"/>'
        },
        'alert-triangle': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path xmlns="http://www.w3.org/2000/svg" d="M12 9L12 13"/><path xmlns="http://www.w3.org/2000/svg" d="M12 17L12.01 17"/>'
        },
        'align-center': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M18 10L6 10"/><path xmlns="http://www.w3.org/2000/svg" d="M21 6L3 6"/><path xmlns="http://www.w3.org/2000/svg" d="M21 14L3 14"/><path xmlns="http://www.w3.org/2000/svg" d="M18 18L6 18"/>'
        },
        'align-justify': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M21 10L3 10"/><path xmlns="http://www.w3.org/2000/svg" d="M21 6L3 6"/><path xmlns="http://www.w3.org/2000/svg" d="M21 14L3 14"/><path xmlns="http://www.w3.org/2000/svg" d="M21 18L3 18"/>'
        },
        'align-left': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M17 10L3 10"/><path xmlns="http://www.w3.org/2000/svg" d="M21 6L3 6"/><path xmlns="http://www.w3.org/2000/svg" d="M21 14L3 14"/><path xmlns="http://www.w3.org/2000/svg" d="M17 18L3 18"/>'
        },
        'align-right': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M21 10L7 10"/><path xmlns="http://www.w3.org/2000/svg" d="M21 6L3 6"/><path xmlns="http://www.w3.org/2000/svg" d="M21 14L3 14"/><path xmlns="http://www.w3.org/2000/svg" d="M21 18L7 18"/>'
        },
        'anchor': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="5" r="3"/><path xmlns="http://www.w3.org/2000/svg" d="M12 22L12 8"/><path xmlns="http://www.w3.org/2000/svg" d="M5 12H2a10 10 0 0 0 20 0h-3"/>'
        },
        'aperture': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="12" r="10"/><path xmlns="http://www.w3.org/2000/svg" d="M14.31 8L20.05 17.94"/><path xmlns="http://www.w3.org/2000/svg" d="M9.69 8L21.17 8"/><path xmlns="http://www.w3.org/2000/svg" d="M7.38 12L13.12 2.06"/><path xmlns="http://www.w3.org/2000/svg" d="M9.69 16L3.95 6.06"/><path xmlns="http://www.w3.org/2000/svg" d="M14.31 16L2.83 16"/><path xmlns="http://www.w3.org/2000/svg" d="M16.62 12L10.88 21.94"/>'
        },
        'archive': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M21 8L21 21 3 21 3 8"/><path xmlns="http://www.w3.org/2000/svg" d="M1 3H23V8H1z"/><path xmlns="http://www.w3.org/2000/svg" d="M10 12L14 12"/>'
        },
        'arrow-down': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M12 5L12 19"/><path xmlns="http://www.w3.org/2000/svg" d="M19 12L12 19 5 12"/>'
        },
        'arrow-down-circle': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="12" r="10"/><path xmlns="http://www.w3.org/2000/svg" d="M8 12L12 16 16 12"/><path xmlns="http://www.w3.org/2000/svg" d="M12 8L12 16"/>'
        },
        'arrow-down-right': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M7 7L17 17"/><path xmlns="http://www.w3.org/2000/svg" d="M17 7L17 17 7 17"/>'
        },
        'arrow-down-left': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M17 7L7 17"/><path xmlns="http://www.w3.org/2000/svg" d="M17 17L7 17 7 7"/>'
        },
        'arrow-left': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M19 12L5 12"/><path xmlns="http://www.w3.org/2000/svg" d="M12 19L5 12 12 5"/>'
        },
        'arrow-left-circle': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="12" r="10"/><path xmlns="http://www.w3.org/2000/svg" d="M12 8L8 12 12 16"/><path xmlns="http://www.w3.org/2000/svg" d="M16 12L8 12"/>'
        },
        'arrow-right': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M5 12L19 12"/><path xmlns="http://www.w3.org/2000/svg" d="M12 5L19 12 12 19"/>'
        },
        'arrow-right-circle': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="12" r="10"/><path xmlns="http://www.w3.org/2000/svg" d="M12 16L16 12 12 8"/><path xmlns="http://www.w3.org/2000/svg" d="M8 12L16 12"/>'
        },
        'arrow-up': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M12 19L12 5"/><path xmlns="http://www.w3.org/2000/svg" d="M5 12L12 5 19 12"/>'
        },
        'arrow-up-circle': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="12" r="10"/><path xmlns="http://www.w3.org/2000/svg" d="M16 12L12 8 8 12"/><path xmlns="http://www.w3.org/2000/svg" d="M12 16L12 8"/>'
        },
        'arrow-up-left': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M17 17L7 7"/><path xmlns="http://www.w3.org/2000/svg" d="M7 17L7 7 17 7"/>'
        },
        'arrow-up-right': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M7 17L17 7"/><path xmlns="http://www.w3.org/2000/svg" d="M7 7L17 7 17 17"/>'
        },
        'at-sign': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="12" r="4"/><path xmlns="http://www.w3.org/2000/svg" d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/>'
        },
        'award': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="8" r="7"/><path xmlns="http://www.w3.org/2000/svg" d="M8.21 13.89L7 23 12 20 17 23 15.79 13.88"/>'
        },
        'bar-chart': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M12 20L12 10"/><path xmlns="http://www.w3.org/2000/svg" d="M18 20L18 4"/><path xmlns="http://www.w3.org/2000/svg" d="M6 20L6 16"/>'
        },
        'bar-chart-2': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M18 20L18 10"/><path xmlns="http://www.w3.org/2000/svg" d="M12 20L12 4"/><path xmlns="http://www.w3.org/2000/svg" d="M6 20L6 14"/>'
        },
        'battery': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<rect xmlns="http://www.w3.org/2000/svg" width="18" height="12" x="1" y="6" rx="2" ry="2"/><path xmlns="http://www.w3.org/2000/svg" d="M23 13L23 11"/>'
        },
        'battery-charging': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"/><path xmlns="http://www.w3.org/2000/svg" d="M23 13L23 11"/><path xmlns="http://www.w3.org/2000/svg" d="M11 6L7 12 13 12 9 18"/>'
        },
        'bell': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path xmlns="http://www.w3.org/2000/svg" d="M13.73 21a2 2 0 0 1-3.46 0"/>'
        },
        'bell-off': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M13.73 21a2 2 0 0 1-3.46 0"/><path xmlns="http://www.w3.org/2000/svg" d="M18.63 13A17.89 17.89 0 0 1 18 8"/><path xmlns="http://www.w3.org/2000/svg" d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"/><path xmlns="http://www.w3.org/2000/svg" d="M18 8a6 6 0 0 0-9.33-5"/><path xmlns="http://www.w3.org/2000/svg" d="M1 1L23 23"/>'
        },
        'bluetooth': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M6.5 6.5L17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"/>'
        },
        'bold': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/><path xmlns="http://www.w3.org/2000/svg" d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/>'
        },
        'book': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path xmlns="http://www.w3.org/2000/svg" d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>'
        },
        'bookmark': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>'
        },
        'book-open': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path xmlns="http://www.w3.org/2000/svg" d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>'
        },
        'box': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path xmlns="http://www.w3.org/2000/svg" d="M3.27 6.96L12 12.01 20.73 6.96"/><path xmlns="http://www.w3.org/2000/svg" d="M12 22.08L12 12"/>'
        },
        'briefcase': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<rect xmlns="http://www.w3.org/2000/svg" width="20" height="14" x="2" y="7" rx="2" ry="2"/><path xmlns="http://www.w3.org/2000/svg" d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>'
        },
        'calendar': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<rect xmlns="http://www.w3.org/2000/svg" width="18" height="18" x="3" y="4" rx="2" ry="2"/><path xmlns="http://www.w3.org/2000/svg" d="M16 2L16 6"/><path xmlns="http://www.w3.org/2000/svg" d="M8 2L8 6"/><path xmlns="http://www.w3.org/2000/svg" d="M3 10L21 10"/>'
        },
        'camera': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="13" r="4"/>'
        },
        'camera-off': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M1 1L23 23"/><path xmlns="http://www.w3.org/2000/svg" d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"/>'
        },
        'cast': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"/><path xmlns="http://www.w3.org/2000/svg" d="M2 20L2.01 20"/>'
        },
        'check': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M20 6L9 17 4 12"/>'
        },
        'check-circle': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path xmlns="http://www.w3.org/2000/svg" d="M22 4L12 14.01 9 11.01"/>'
        },
        'check-square': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M9 11L12 14 22 4"/><path xmlns="http://www.w3.org/2000/svg" d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>'
        },
        'chevron-down': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M6 9L12 15 18 9"/>'
        },
        'chevron-left': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M15 18L9 12 15 6"/>'
        },
        'chevron-right': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M9 18L15 12 9 6"/>'
        },
        'chevrons-down': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M7 13L12 18 17 13"/><path xmlns="http://www.w3.org/2000/svg" d="M7 6L12 11 17 6"/>'
        },
        'chevrons-left': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M11 17L6 12 11 7"/><path xmlns="http://www.w3.org/2000/svg" d="M18 17L13 12 18 7"/>'
        },
        'chevrons-right': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M13 17L18 12 13 7"/><path xmlns="http://www.w3.org/2000/svg" d="M6 17L11 12 6 7"/>'
        },
        'chevrons-up': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M17 11L12 6 7 11"/><path xmlns="http://www.w3.org/2000/svg" d="M17 18L12 13 7 18"/>'
        },
        'chevron-up': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M18 15L12 9 6 15"/>'
        },
        'chrome': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="12" r="10"/><circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="12" r="4"/><path xmlns="http://www.w3.org/2000/svg" d="M21.17 8L12 8"/><path xmlns="http://www.w3.org/2000/svg" d="M3.95 6.06L8.54 14"/><path xmlns="http://www.w3.org/2000/svg" d="M10.88 21.94L15.46 14"/>'
        },
        'circle': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="12" r="10"/>'
        },
        'clipboard': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect xmlns="http://www.w3.org/2000/svg" width="8" height="4" x="8" y="2" rx="1" ry="1"/>'
        },
        'clock': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="12" r="10"/><path xmlns="http://www.w3.org/2000/svg" d="M12 6L12 12 16 14"/>'
        },
        'cloud': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>'
        },
        'cloud-drizzle': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M8 19L8 21"/><path xmlns="http://www.w3.org/2000/svg" d="M8 13L8 15"/><path xmlns="http://www.w3.org/2000/svg" d="M16 19L16 21"/><path xmlns="http://www.w3.org/2000/svg" d="M16 13L16 15"/><path xmlns="http://www.w3.org/2000/svg" d="M12 21L12 23"/><path xmlns="http://www.w3.org/2000/svg" d="M12 15L12 17"/><path xmlns="http://www.w3.org/2000/svg" d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/>'
        },
        'cloud-lightning': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"/><path xmlns="http://www.w3.org/2000/svg" d="M13 11L9 17 15 17 11 23"/>'
        },
        'cloud-off': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"/><path xmlns="http://www.w3.org/2000/svg" d="M1 1L23 23"/>'
        },
        'cloud-rain': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M16 13L16 21"/><path xmlns="http://www.w3.org/2000/svg" d="M8 13L8 21"/><path xmlns="http://www.w3.org/2000/svg" d="M12 15L12 23"/><path xmlns="http://www.w3.org/2000/svg" d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/>'
        },
        'cloud-snow': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"/><path xmlns="http://www.w3.org/2000/svg" d="M8 16L8.01 16"/><path xmlns="http://www.w3.org/2000/svg" d="M8 20L8.01 20"/><path xmlns="http://www.w3.org/2000/svg" d="M12 18L12.01 18"/><path xmlns="http://www.w3.org/2000/svg" d="M12 22L12.01 22"/><path xmlns="http://www.w3.org/2000/svg" d="M16 16L16.01 16"/><path xmlns="http://www.w3.org/2000/svg" d="M16 20L16.01 20"/>'
        },
        'code': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M16 18L22 12 16 6"/><path xmlns="http://www.w3.org/2000/svg" d="M8 6L2 12 8 18"/>'
        },
        'codepen': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M12 2L22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2z"/><path xmlns="http://www.w3.org/2000/svg" d="M12 22L12 15.5"/><path xmlns="http://www.w3.org/2000/svg" d="M22 8.5L12 15.5 2 8.5"/><path xmlns="http://www.w3.org/2000/svg" d="M2 15.5L12 8.5 22 15.5"/><path xmlns="http://www.w3.org/2000/svg" d="M12 2L12 8.5"/>'
        },
        'codesandbox': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path xmlns="http://www.w3.org/2000/svg" d="M7.5 4.21L12 6.81 16.5 4.21"/><path xmlns="http://www.w3.org/2000/svg" d="M7.5 19.79L7.5 14.6 3 12"/><path xmlns="http://www.w3.org/2000/svg" d="M21 12L16.5 14.6 16.5 19.79"/><path xmlns="http://www.w3.org/2000/svg" d="M3.27 6.96L12 12.01 20.73 6.96"/><path xmlns="http://www.w3.org/2000/svg" d="M12 22.08L12 12"/>'
        },
        'coffee': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M18 8h1a4 4 0 0 1 0 8h-1"/><path xmlns="http://www.w3.org/2000/svg" d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><path xmlns="http://www.w3.org/2000/svg" d="M6 1L6 4"/><path xmlns="http://www.w3.org/2000/svg" d="M10 1L10 4"/><path xmlns="http://www.w3.org/2000/svg" d="M14 1L14 4"/>'
        },
        'columns': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"/>'
        },
        'command': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>'
        },
        'compass': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="12" r="10"/><path xmlns="http://www.w3.org/2000/svg" d="M16.24 7.76L14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76z"/>'
        },
        'copy': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<rect xmlns="http://www.w3.org/2000/svg" width="13" height="13" x="9" y="9" rx="2" ry="2"/><path xmlns="http://www.w3.org/2000/svg" d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>'
        },
        'corner-down-left': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M9 10L4 15 9 20"/><path xmlns="http://www.w3.org/2000/svg" d="M20 4v7a4 4 0 0 1-4 4H4"/>'
        },
        'corner-down-right': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M15 10L20 15 15 20"/><path xmlns="http://www.w3.org/2000/svg" d="M4 4v7a4 4 0 0 0 4 4h12"/>'
        },
        'corner-left-down': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M14 15L9 20 4 15"/><path xmlns="http://www.w3.org/2000/svg" d="M20 4h-7a4 4 0 0 0-4 4v12"/>'
        },
        'corner-left-up': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M14 9L9 4 4 9"/><path xmlns="http://www.w3.org/2000/svg" d="M20 20h-7a4 4 0 0 1-4-4V4"/>'
        },
        'corner-right-down': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M10 15L15 20 20 15"/><path xmlns="http://www.w3.org/2000/svg" d="M4 4h7a4 4 0 0 1 4 4v12"/>'
        },
        'corner-right-up': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M10 9L15 4 20 9"/><path xmlns="http://www.w3.org/2000/svg" d="M4 20h7a4 4 0 0 0 4-4V4"/>'
        },
        'corner-up-left': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M9 14L4 9 9 4"/><path xmlns="http://www.w3.org/2000/svg" d="M20 20v-7a4 4 0 0 0-4-4H4"/>'
        },
        'corner-up-right': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M15 14L20 9 15 4"/><path xmlns="http://www.w3.org/2000/svg" d="M4 20v-7a4 4 0 0 1 4-4h12"/>'
        },
        'cpu': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<rect xmlns="http://www.w3.org/2000/svg" width="16" height="16" x="4" y="4" rx="2" ry="2"/><path xmlns="http://www.w3.org/2000/svg" d="M9 9H15V15H9z"/><path xmlns="http://www.w3.org/2000/svg" d="M9 1L9 4"/><path xmlns="http://www.w3.org/2000/svg" d="M15 1L15 4"/><path xmlns="http://www.w3.org/2000/svg" d="M9 20L9 23"/><path xmlns="http://www.w3.org/2000/svg" d="M15 20L15 23"/><path xmlns="http://www.w3.org/2000/svg" d="M20 9L23 9"/><path xmlns="http://www.w3.org/2000/svg" d="M20 14L23 14"/><path xmlns="http://www.w3.org/2000/svg" d="M1 9L4 9"/><path xmlns="http://www.w3.org/2000/svg" d="M1 14L4 14"/>'
        },
        'credit-card': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<rect xmlns="http://www.w3.org/2000/svg" width="22" height="16" x="1" y="4" rx="2" ry="2"/><path xmlns="http://www.w3.org/2000/svg" d="M1 10L23 10"/>'
        },
        'crop': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M6.13 1L6 16a2 2 0 0 0 2 2h15"/><path xmlns="http://www.w3.org/2000/svg" d="M1 6.13L16 6a2 2 0 0 1 2 2v15"/>'
        },
        'crosshair': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="12" r="10"/><path xmlns="http://www.w3.org/2000/svg" d="M22 12L18 12"/><path xmlns="http://www.w3.org/2000/svg" d="M6 12L2 12"/><path xmlns="http://www.w3.org/2000/svg" d="M12 6L12 2"/><path xmlns="http://www.w3.org/2000/svg" d="M12 22L12 18"/>'
        },
        'database': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<ellipse xmlns="http://www.w3.org/2000/svg" cx="12" cy="5" rx="9" ry="3"/><path xmlns="http://www.w3.org/2000/svg" d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path xmlns="http://www.w3.org/2000/svg" d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>'
        },
        'delete': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"/><path xmlns="http://www.w3.org/2000/svg" d="M18 9L12 15"/><path xmlns="http://www.w3.org/2000/svg" d="M12 9L18 15"/>'
        },
        'disc': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="12" r="10"/><circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="12" r="3"/>'
        },
        'divide': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="6" r="2"/><path xmlns="http://www.w3.org/2000/svg" d="M5 12L19 12"/><circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="18" r="2"/>'
        },
        'divide-circle': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M8 12L16 12"/><path xmlns="http://www.w3.org/2000/svg" d="M12 16L12 16"/><path xmlns="http://www.w3.org/2000/svg" d="M12 8L12 8"/><circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="12" r="10"/>'
        },
        'divide-square': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<rect xmlns="http://www.w3.org/2000/svg" width="18" height="18" x="3" y="3" rx="2" ry="2"/><path xmlns="http://www.w3.org/2000/svg" d="M8 12L16 12"/><path xmlns="http://www.w3.org/2000/svg" d="M12 16L12 16"/><path xmlns="http://www.w3.org/2000/svg" d="M12 8L12 8"/>'
        },
        'dollar-sign': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M12 1L12 23"/><path xmlns="http://www.w3.org/2000/svg" d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>'
        },
        'download': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path xmlns="http://www.w3.org/2000/svg" d="M7 10L12 15 17 10"/><path xmlns="http://www.w3.org/2000/svg" d="M12 15L12 3"/>'
        },
        'download-cloud': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M8 17L12 21 16 17"/><path xmlns="http://www.w3.org/2000/svg" d="M12 12L12 21"/><path xmlns="http://www.w3.org/2000/svg" d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"/>'
        },
        'dribbble': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="12" r="10"/><path xmlns="http://www.w3.org/2000/svg" d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/>'
        },
        'droplet': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>'
        },
        'edit': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path xmlns="http://www.w3.org/2000/svg" d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>'
        },
        'edit-2': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>'
        },
        'edit-3': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M12 20h9"/><path xmlns="http://www.w3.org/2000/svg" d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>'
        },
        'external-link': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path xmlns="http://www.w3.org/2000/svg" d="M15 3L21 3 21 9"/><path xmlns="http://www.w3.org/2000/svg" d="M10 14L21 3"/>'
        },
        'eye': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="12" r="3"/>'
        },
        'eye-off': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><path xmlns="http://www.w3.org/2000/svg" d="M1 1L23 23"/>'
        },
        'facebook': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>'
        },
        'fast-forward': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M13 19L22 12 13 5 13 19z"/><path xmlns="http://www.w3.org/2000/svg" d="M2 19L11 12 2 5 2 19z"/>'
        },
        'feather': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><path xmlns="http://www.w3.org/2000/svg" d="M16 8L2 22"/><path xmlns="http://www.w3.org/2000/svg" d="M17.5 15L9 15"/>'
        },
        'figma': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path xmlns="http://www.w3.org/2000/svg" d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path xmlns="http://www.w3.org/2000/svg" d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/><path xmlns="http://www.w3.org/2000/svg" d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/><path xmlns="http://www.w3.org/2000/svg" d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/>'
        },
        'file': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path xmlns="http://www.w3.org/2000/svg" d="M13 2L13 9 20 9"/>'
        },
        'file-minus': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path xmlns="http://www.w3.org/2000/svg" d="M14 2L14 8 20 8"/><path xmlns="http://www.w3.org/2000/svg" d="M9 15L15 15"/>'
        },
        'file-plus': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path xmlns="http://www.w3.org/2000/svg" d="M14 2L14 8 20 8"/><path xmlns="http://www.w3.org/2000/svg" d="M12 18L12 12"/><path xmlns="http://www.w3.org/2000/svg" d="M9 15L15 15"/>'
        },
        'file-text': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path xmlns="http://www.w3.org/2000/svg" d="M14 2L14 8 20 8"/><path xmlns="http://www.w3.org/2000/svg" d="M16 13L8 13"/><path xmlns="http://www.w3.org/2000/svg" d="M16 17L8 17"/><path xmlns="http://www.w3.org/2000/svg" d="M10 9L9 9 8 9"/>'
        },
        'film': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<rect xmlns="http://www.w3.org/2000/svg" width="20" height="20" x="2" y="2" rx="2.18" ry="2.18"/><path xmlns="http://www.w3.org/2000/svg" d="M7 2L7 22"/><path xmlns="http://www.w3.org/2000/svg" d="M17 2L17 22"/><path xmlns="http://www.w3.org/2000/svg" d="M2 12L22 12"/><path xmlns="http://www.w3.org/2000/svg" d="M2 7L7 7"/><path xmlns="http://www.w3.org/2000/svg" d="M2 17L7 17"/><path xmlns="http://www.w3.org/2000/svg" d="M17 17L22 17"/><path xmlns="http://www.w3.org/2000/svg" d="M17 7L22 7"/>'
        },
        'filter': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M22 3L2 3 10 12.46 10 19 14 21 14 12.46 22 3z"/>'
        },
        'flag': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path xmlns="http://www.w3.org/2000/svg" d="M4 22L4 15"/>'
        },
        'folder': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>'
        },
        'folder-minus': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/><path xmlns="http://www.w3.org/2000/svg" d="M9 14L15 14"/>'
        },
        'folder-plus': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/><path xmlns="http://www.w3.org/2000/svg" d="M12 11L12 17"/><path xmlns="http://www.w3.org/2000/svg" d="M9 14L15 14"/>'
        },
        'framer': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"/>'
        },
        'frown': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="12" r="10"/><path xmlns="http://www.w3.org/2000/svg" d="M16 16s-1.5-2-4-2-4 2-4 2"/><path xmlns="http://www.w3.org/2000/svg" d="M9 9L9.01 9"/><path xmlns="http://www.w3.org/2000/svg" d="M15 9L15.01 9"/>'
        },
        'gift': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M20 12L20 22 4 22 4 12"/><path xmlns="http://www.w3.org/2000/svg" d="M2 7H22V12H2z"/><path xmlns="http://www.w3.org/2000/svg" d="M12 22L12 7"/><path xmlns="http://www.w3.org/2000/svg" d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path xmlns="http://www.w3.org/2000/svg" d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>'
        },
        'git-branch': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M6 3L6 15"/><circle xmlns="http://www.w3.org/2000/svg" cx="18" cy="6" r="3"/><circle xmlns="http://www.w3.org/2000/svg" cx="6" cy="18" r="3"/><path xmlns="http://www.w3.org/2000/svg" d="M18 9a9 9 0 0 1-9 9"/>'
        },
        'git-commit': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="12" r="4"/><path xmlns="http://www.w3.org/2000/svg" d="M1.05 12L7 12"/><path xmlns="http://www.w3.org/2000/svg" d="M17.01 12L22.96 12"/>'
        },
        'github': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>'
        },
        'gitlab': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"/>'
        },
        'git-merge': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<circle xmlns="http://www.w3.org/2000/svg" cx="18" cy="18" r="3"/><circle xmlns="http://www.w3.org/2000/svg" cx="6" cy="6" r="3"/><path xmlns="http://www.w3.org/2000/svg" d="M6 21V9a9 9 0 0 0 9 9"/>'
        },
        'git-pull-request': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<circle xmlns="http://www.w3.org/2000/svg" cx="18" cy="18" r="3"/><circle xmlns="http://www.w3.org/2000/svg" cx="6" cy="6" r="3"/><path xmlns="http://www.w3.org/2000/svg" d="M13 6h3a2 2 0 0 1 2 2v7"/><path xmlns="http://www.w3.org/2000/svg" d="M6 9L6 21"/>'
        },
        'globe': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="12" r="10"/><path xmlns="http://www.w3.org/2000/svg" d="M2 12L22 12"/><path xmlns="http://www.w3.org/2000/svg" d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>'
        },
        'grid': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M3 3H10V10H3z"/><path xmlns="http://www.w3.org/2000/svg" d="M14 3H21V10H14z"/><path xmlns="http://www.w3.org/2000/svg" d="M14 14H21V21H14z"/><path xmlns="http://www.w3.org/2000/svg" d="M3 14H10V21H3z"/>'
        },
        'hard-drive': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M22 12L2 12"/><path xmlns="http://www.w3.org/2000/svg" d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><path xmlns="http://www.w3.org/2000/svg" d="M6 16L6.01 16"/><path xmlns="http://www.w3.org/2000/svg" d="M10 16L10.01 16"/>'
        },
        'hash': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M4 9L20 9"/><path xmlns="http://www.w3.org/2000/svg" d="M4 15L20 15"/><path xmlns="http://www.w3.org/2000/svg" d="M10 3L8 21"/><path xmlns="http://www.w3.org/2000/svg" d="M16 3L14 21"/>'
        },
        'headphones': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M3 18v-6a9 9 0 0 1 18 0v6"/><path xmlns="http://www.w3.org/2000/svg" d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>'
        },
        'heart': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>'
        },
        'help-circle': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="12" r="10"/><path xmlns="http://www.w3.org/2000/svg" d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path xmlns="http://www.w3.org/2000/svg" d="M12 17L12.01 17"/>'
        },
        'hexagon': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>'
        },
        'home': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path xmlns="http://www.w3.org/2000/svg" d="M9 22L9 12 15 12 15 22"/>'
        },
        'image': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<rect xmlns="http://www.w3.org/2000/svg" width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle xmlns="http://www.w3.org/2000/svg" cx="8.5" cy="8.5" r="1.5"/><path xmlns="http://www.w3.org/2000/svg" d="M21 15L16 10 5 21"/>'
        },
        'inbox': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M22 12L16 12 14 15 10 15 8 12 2 12"/><path xmlns="http://www.w3.org/2000/svg" d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>'
        },
        'info': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="12" r="10"/><path xmlns="http://www.w3.org/2000/svg" d="M12 16L12 12"/><path xmlns="http://www.w3.org/2000/svg" d="M12 8L12.01 8"/>'
        },
        'instagram': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<rect xmlns="http://www.w3.org/2000/svg" width="20" height="20" x="2" y="2" rx="5" ry="5"/><path xmlns="http://www.w3.org/2000/svg" d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><path xmlns="http://www.w3.org/2000/svg" d="M17.5 6.5L17.51 6.5"/>'
        },
        'italic': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M19 4L10 4"/><path xmlns="http://www.w3.org/2000/svg" d="M14 20L5 20"/><path xmlns="http://www.w3.org/2000/svg" d="M15 4L9 20"/>'
        },
        'key': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>'
        },
        'layers': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M12 2L2 7 12 12 22 7 12 2z"/><path xmlns="http://www.w3.org/2000/svg" d="M2 17L12 22 22 17"/><path xmlns="http://www.w3.org/2000/svg" d="M2 12L12 17 22 12"/>'
        },
        'layout': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<rect xmlns="http://www.w3.org/2000/svg" width="18" height="18" x="3" y="3" rx="2" ry="2"/><path xmlns="http://www.w3.org/2000/svg" d="M3 9L21 9"/><path xmlns="http://www.w3.org/2000/svg" d="M9 21L9 9"/>'
        },
        'life-buoy': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="12" r="10"/><circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="12" r="4"/><path xmlns="http://www.w3.org/2000/svg" d="M4.93 4.93L9.17 9.17"/><path xmlns="http://www.w3.org/2000/svg" d="M14.83 14.83L19.07 19.07"/><path xmlns="http://www.w3.org/2000/svg" d="M14.83 9.17L19.07 4.93"/><path xmlns="http://www.w3.org/2000/svg" d="M14.83 9.17L18.36 5.64"/><path xmlns="http://www.w3.org/2000/svg" d="M4.93 19.07L9.17 14.83"/>'
        },
        'link': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path xmlns="http://www.w3.org/2000/svg" d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>'
        },
        'link-2': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"/><path xmlns="http://www.w3.org/2000/svg" d="M8 12L16 12"/>'
        },
        'linkedin': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><path xmlns="http://www.w3.org/2000/svg" d="M2 9H6V21H2z"/><circle xmlns="http://www.w3.org/2000/svg" cx="4" cy="4" r="2"/>'
        },
        'list': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M8 6L21 6"/><path xmlns="http://www.w3.org/2000/svg" d="M8 12L21 12"/><path xmlns="http://www.w3.org/2000/svg" d="M8 18L21 18"/><path xmlns="http://www.w3.org/2000/svg" d="M3 6L3.01 6"/><path xmlns="http://www.w3.org/2000/svg" d="M3 12L3.01 12"/><path xmlns="http://www.w3.org/2000/svg" d="M3 18L3.01 18"/>'
        },
        'loader': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M12 2L12 6"/><path xmlns="http://www.w3.org/2000/svg" d="M12 18L12 22"/><path xmlns="http://www.w3.org/2000/svg" d="M4.93 4.93L7.76 7.76"/><path xmlns="http://www.w3.org/2000/svg" d="M16.24 16.24L19.07 19.07"/><path xmlns="http://www.w3.org/2000/svg" d="M2 12L6 12"/><path xmlns="http://www.w3.org/2000/svg" d="M18 12L22 12"/><path xmlns="http://www.w3.org/2000/svg" d="M4.93 19.07L7.76 16.24"/><path xmlns="http://www.w3.org/2000/svg" d="M16.24 7.76L19.07 4.93"/>'
        },
        'lock': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<rect xmlns="http://www.w3.org/2000/svg" width="18" height="11" x="3" y="11" rx="2" ry="2"/><path xmlns="http://www.w3.org/2000/svg" d="M7 11V7a5 5 0 0 1 10 0v4"/>'
        },
        'log-in': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><path xmlns="http://www.w3.org/2000/svg" d="M10 17L15 12 10 7"/><path xmlns="http://www.w3.org/2000/svg" d="M15 12L3 12"/>'
        },
        'log-out': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path xmlns="http://www.w3.org/2000/svg" d="M16 17L21 12 16 7"/><path xmlns="http://www.w3.org/2000/svg" d="M21 12L9 12"/>'
        },
        'mail': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path xmlns="http://www.w3.org/2000/svg" d="M22 6L12 13 2 6"/>'
        },
        'map': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M1 6L1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6z"/><path xmlns="http://www.w3.org/2000/svg" d="M8 2L8 18"/><path xmlns="http://www.w3.org/2000/svg" d="M16 6L16 22"/>'
        },
        'map-pin': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="10" r="3"/>'
        },
        'maximize': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>'
        },
        'maximize-2': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M15 3L21 3 21 9"/><path xmlns="http://www.w3.org/2000/svg" d="M9 21L3 21 3 15"/><path xmlns="http://www.w3.org/2000/svg" d="M21 3L14 10"/><path xmlns="http://www.w3.org/2000/svg" d="M3 21L10 14"/>'
        },
        'meh': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="12" r="10"/><path xmlns="http://www.w3.org/2000/svg" d="M8 15L16 15"/><path xmlns="http://www.w3.org/2000/svg" d="M9 9L9.01 9"/><path xmlns="http://www.w3.org/2000/svg" d="M15 9L15.01 9"/>'
        },
        'menu': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M3 12L21 12"/><path xmlns="http://www.w3.org/2000/svg" d="M3 6L21 6"/><path xmlns="http://www.w3.org/2000/svg" d="M3 18L21 18"/>'
        },
        'message-circle': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>'
        },
        'message-square': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>'
        },
        'mic': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path xmlns="http://www.w3.org/2000/svg" d="M19 10v2a7 7 0 0 1-14 0v-2"/><path xmlns="http://www.w3.org/2000/svg" d="M12 19L12 23"/><path xmlns="http://www.w3.org/2000/svg" d="M8 23L16 23"/>'
        },
        'mic-off': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M1 1L23 23"/><path xmlns="http://www.w3.org/2000/svg" d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"/><path xmlns="http://www.w3.org/2000/svg" d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"/><path xmlns="http://www.w3.org/2000/svg" d="M12 19L12 23"/><path xmlns="http://www.w3.org/2000/svg" d="M8 23L16 23"/>'
        },
        'minimize': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/>'
        },
        'minimize-2': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M4 14L10 14 10 20"/><path xmlns="http://www.w3.org/2000/svg" d="M20 10L14 10 14 4"/><path xmlns="http://www.w3.org/2000/svg" d="M14 10L21 3"/><path xmlns="http://www.w3.org/2000/svg" d="M3 21L10 14"/>'
        },
        'minus': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M5 12L19 12"/>'
        },
        'minus-circle': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="12" r="10"/><path xmlns="http://www.w3.org/2000/svg" d="M8 12L16 12"/>'
        },
        'minus-square': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<rect xmlns="http://www.w3.org/2000/svg" width="18" height="18" x="3" y="3" rx="2" ry="2"/><path xmlns="http://www.w3.org/2000/svg" d="M8 12L16 12"/>'
        },
        'monitor': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<rect xmlns="http://www.w3.org/2000/svg" width="20" height="14" x="2" y="3" rx="2" ry="2"/><path xmlns="http://www.w3.org/2000/svg" d="M8 21L16 21"/><path xmlns="http://www.w3.org/2000/svg" d="M12 17L12 21"/>'
        },
        'moon': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>'
        },
        'more-horizontal': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="12" r="1"/><circle xmlns="http://www.w3.org/2000/svg" cx="19" cy="12" r="1"/><circle xmlns="http://www.w3.org/2000/svg" cx="5" cy="12" r="1"/>'
        },
        'more-vertical': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="12" r="1"/><circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="5" r="1"/><circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="19" r="1"/>'
        },
        'mouse-pointer': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/><path xmlns="http://www.w3.org/2000/svg" d="M13 13l6 6"/>'
        },
        'move': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M5 9L2 12 5 15"/><path xmlns="http://www.w3.org/2000/svg" d="M9 5L12 2 15 5"/><path xmlns="http://www.w3.org/2000/svg" d="M15 19L12 22 9 19"/><path xmlns="http://www.w3.org/2000/svg" d="M19 9L22 12 19 15"/><path xmlns="http://www.w3.org/2000/svg" d="M2 12L22 12"/><path xmlns="http://www.w3.org/2000/svg" d="M12 2L12 22"/>'
        },
        'music': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M9 18V5l12-2v13"/><circle xmlns="http://www.w3.org/2000/svg" cx="6" cy="18" r="3"/><circle xmlns="http://www.w3.org/2000/svg" cx="18" cy="16" r="3"/>'
        },
        'navigation': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M3 11L22 2 13 21 11 13 3 11z"/>'
        },
        'navigation-2': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M12 2L19 21 12 17 5 21 12 2z"/>'
        },
        'octagon': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M7.86 2L16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2z"/>'
        },
        'package': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M16.5 9.4L7.5 4.21"/><path xmlns="http://www.w3.org/2000/svg" d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path xmlns="http://www.w3.org/2000/svg" d="M3.27 6.96L12 12.01 20.73 6.96"/><path xmlns="http://www.w3.org/2000/svg" d="M12 22.08L12 12"/>'
        },
        'paperclip': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>'
        },
        'pause': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M6 4H10V20H6z"/><path xmlns="http://www.w3.org/2000/svg" d="M14 4H18V20H14z"/>'
        },
        'pause-circle': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="12" r="10"/><path xmlns="http://www.w3.org/2000/svg" d="M10 15L10 9"/><path xmlns="http://www.w3.org/2000/svg" d="M14 15L14 9"/>'
        },
        'pen-tool': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M12 19l7-7 3 3-7 7-3-3z"/><path xmlns="http://www.w3.org/2000/svg" d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path xmlns="http://www.w3.org/2000/svg" d="M2 2l7.586 7.586"/><circle xmlns="http://www.w3.org/2000/svg" cx="11" cy="11" r="2"/>'
        },
        'percent': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M19 5L5 19"/><circle xmlns="http://www.w3.org/2000/svg" cx="6.5" cy="6.5" r="2.5"/><circle xmlns="http://www.w3.org/2000/svg" cx="17.5" cy="17.5" r="2.5"/>'
        },
        'phone': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>'
        },
        'phone-call': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>'
        },
        'phone-forwarded': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M19 1L23 5 19 9"/><path xmlns="http://www.w3.org/2000/svg" d="M15 5L23 5"/><path xmlns="http://www.w3.org/2000/svg" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>'
        },
        'phone-incoming': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M16 2L16 8 22 8"/><path xmlns="http://www.w3.org/2000/svg" d="M23 1L16 8"/><path xmlns="http://www.w3.org/2000/svg" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>'
        },
        'phone-missed': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M23 1L17 7"/><path xmlns="http://www.w3.org/2000/svg" d="M17 1L23 7"/><path xmlns="http://www.w3.org/2000/svg" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>'
        },
        'phone-off': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"/><path xmlns="http://www.w3.org/2000/svg" d="M23 1L1 23"/>'
        },
        'phone-outgoing': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M23 7L23 1 17 1"/><path xmlns="http://www.w3.org/2000/svg" d="M16 8L23 1"/><path xmlns="http://www.w3.org/2000/svg" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>'
        },
        'pie-chart': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path xmlns="http://www.w3.org/2000/svg" d="M22 12A10 10 0 0 0 12 2v10z"/>'
        },
        'play': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M5 3L19 12 5 21 5 3z"/>'
        },
        'play-circle': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="12" r="10"/><path xmlns="http://www.w3.org/2000/svg" d="M10 8L16 12 10 16 10 8z"/>'
        },
        'plus': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M12 5L12 19"/><path xmlns="http://www.w3.org/2000/svg" d="M5 12L19 12"/>'
        },
        'plus-circle': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="12" r="10"/><path xmlns="http://www.w3.org/2000/svg" d="M12 8L12 16"/><path xmlns="http://www.w3.org/2000/svg" d="M8 12L16 12"/>'
        },
        'plus-square': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<rect xmlns="http://www.w3.org/2000/svg" width="18" height="18" x="3" y="3" rx="2" ry="2"/><path xmlns="http://www.w3.org/2000/svg" d="M12 8L12 16"/><path xmlns="http://www.w3.org/2000/svg" d="M8 12L16 12"/>'
        },
        'pocket': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"/><path xmlns="http://www.w3.org/2000/svg" d="M8 10L12 14 16 10"/>'
        },
        'power': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M18.36 6.64a9 9 0 1 1-12.73 0"/><path xmlns="http://www.w3.org/2000/svg" d="M12 2L12 12"/>'
        },
        'printer': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M6 9L6 2 18 2 18 9"/><path xmlns="http://www.w3.org/2000/svg" d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path xmlns="http://www.w3.org/2000/svg" d="M6 14H18V22H6z"/>'
        },
        'radio': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="12" r="2"/><path xmlns="http://www.w3.org/2000/svg" d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/>'
        },
        'refresh-ccw': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M1 4L1 10 7 10"/><path xmlns="http://www.w3.org/2000/svg" d="M23 20L23 14 17 14"/><path xmlns="http://www.w3.org/2000/svg" d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/>'
        },
        'refresh-cw': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M23 4L23 10 17 10"/><path xmlns="http://www.w3.org/2000/svg" d="M1 20L1 14 7 14"/><path xmlns="http://www.w3.org/2000/svg" d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>'
        },
        'repeat': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M17 1L21 5 17 9"/><path xmlns="http://www.w3.org/2000/svg" d="M3 11V9a4 4 0 0 1 4-4h14"/><path xmlns="http://www.w3.org/2000/svg" d="M7 23L3 19 7 15"/><path xmlns="http://www.w3.org/2000/svg" d="M21 13v2a4 4 0 0 1-4 4H3"/>'
        },
        'rewind': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M11 19L2 12 11 5 11 19z"/><path xmlns="http://www.w3.org/2000/svg" d="M22 19L13 12 22 5 22 19z"/>'
        },
        'rotate-ccw': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M1 4L1 10 7 10"/><path xmlns="http://www.w3.org/2000/svg" d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>'
        },
        'rotate-cw': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M23 4L23 10 17 10"/><path xmlns="http://www.w3.org/2000/svg" d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>'
        },
        'rss': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M4 11a9 9 0 0 1 9 9"/><path xmlns="http://www.w3.org/2000/svg" d="M4 4a16 16 0 0 1 16 16"/><circle xmlns="http://www.w3.org/2000/svg" cx="5" cy="19" r="1"/>'
        },
        'save': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path xmlns="http://www.w3.org/2000/svg" d="M17 21L17 13 7 13 7 21"/><path xmlns="http://www.w3.org/2000/svg" d="M7 3L7 8 15 8"/>'
        },
        'scissors': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<circle xmlns="http://www.w3.org/2000/svg" cx="6" cy="6" r="3"/><circle xmlns="http://www.w3.org/2000/svg" cx="6" cy="18" r="3"/><path xmlns="http://www.w3.org/2000/svg" d="M20 4L8.12 15.88"/><path xmlns="http://www.w3.org/2000/svg" d="M14.47 14.48L20 20"/><path xmlns="http://www.w3.org/2000/svg" d="M8.12 8.12L12 12"/>'
        },
        'search': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<circle xmlns="http://www.w3.org/2000/svg" cx="11" cy="11" r="8"/><path xmlns="http://www.w3.org/2000/svg" d="M21 21L16.65 16.65"/>'
        },
        'send': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M22 2L11 13"/><path xmlns="http://www.w3.org/2000/svg" d="M22 2L15 22 11 13 2 9 22 2z"/>'
        },
        'server': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<rect xmlns="http://www.w3.org/2000/svg" width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect xmlns="http://www.w3.org/2000/svg" width="20" height="8" x="2" y="14" rx="2" ry="2"/><path xmlns="http://www.w3.org/2000/svg" d="M6 6L6.01 6"/><path xmlns="http://www.w3.org/2000/svg" d="M6 18L6.01 18"/>'
        },
        'settings': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="12" r="3"/><path xmlns="http://www.w3.org/2000/svg" d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>'
        },
        'share': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path xmlns="http://www.w3.org/2000/svg" d="M16 6L12 2 8 6"/><path xmlns="http://www.w3.org/2000/svg" d="M12 2L12 15"/>'
        },
        'share-2': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<circle xmlns="http://www.w3.org/2000/svg" cx="18" cy="5" r="3"/><circle xmlns="http://www.w3.org/2000/svg" cx="6" cy="12" r="3"/><circle xmlns="http://www.w3.org/2000/svg" cx="18" cy="19" r="3"/><path xmlns="http://www.w3.org/2000/svg" d="M8.59 13.51L15.42 17.49"/><path xmlns="http://www.w3.org/2000/svg" d="M15.41 6.51L8.59 10.49"/>'
        },
        'shield': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'
        },
        'shield-off': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"/><path xmlns="http://www.w3.org/2000/svg" d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"/><path xmlns="http://www.w3.org/2000/svg" d="M1 1L23 23"/>'
        },
        'shopping-bag': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path xmlns="http://www.w3.org/2000/svg" d="M3 6L21 6"/><path xmlns="http://www.w3.org/2000/svg" d="M16 10a4 4 0 0 1-8 0"/>'
        },
        'shopping-cart': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<circle xmlns="http://www.w3.org/2000/svg" cx="9" cy="21" r="1"/><circle xmlns="http://www.w3.org/2000/svg" cx="20" cy="21" r="1"/><path xmlns="http://www.w3.org/2000/svg" d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>'
        },
        'shuffle': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M16 3L21 3 21 8"/><path xmlns="http://www.w3.org/2000/svg" d="M4 20L21 3"/><path xmlns="http://www.w3.org/2000/svg" d="M21 16L21 21 16 21"/><path xmlns="http://www.w3.org/2000/svg" d="M15 15L21 21"/><path xmlns="http://www.w3.org/2000/svg" d="M4 4L9 9"/>'
        },
        'sidebar': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<rect xmlns="http://www.w3.org/2000/svg" width="18" height="18" x="3" y="3" rx="2" ry="2"/><path xmlns="http://www.w3.org/2000/svg" d="M9 3L9 21"/>'
        },
        'skip-back': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M19 20L9 12 19 4 19 20z"/><path xmlns="http://www.w3.org/2000/svg" d="M5 19L5 5"/>'
        },
        'skip-forward': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M5 4L15 12 5 20 5 4z"/><path xmlns="http://www.w3.org/2000/svg" d="M19 5L19 19"/>'
        },
        'slack': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"/><path xmlns="http://www.w3.org/2000/svg" d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/><path xmlns="http://www.w3.org/2000/svg" d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"/><path xmlns="http://www.w3.org/2000/svg" d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"/><path xmlns="http://www.w3.org/2000/svg" d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"/><path xmlns="http://www.w3.org/2000/svg" d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/><path xmlns="http://www.w3.org/2000/svg" d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"/><path xmlns="http://www.w3.org/2000/svg" d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"/>'
        },
        'slash': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="12" r="10"/><path xmlns="http://www.w3.org/2000/svg" d="M4.93 4.93L19.07 19.07"/>'
        },
        'sliders': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M4 21L4 14"/><path xmlns="http://www.w3.org/2000/svg" d="M4 10L4 3"/><path xmlns="http://www.w3.org/2000/svg" d="M12 21L12 12"/><path xmlns="http://www.w3.org/2000/svg" d="M12 8L12 3"/><path xmlns="http://www.w3.org/2000/svg" d="M20 21L20 16"/><path xmlns="http://www.w3.org/2000/svg" d="M20 12L20 3"/><path xmlns="http://www.w3.org/2000/svg" d="M1 14L7 14"/><path xmlns="http://www.w3.org/2000/svg" d="M9 8L15 8"/><path xmlns="http://www.w3.org/2000/svg" d="M17 16L23 16"/>'
        },
        'smartphone': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<rect xmlns="http://www.w3.org/2000/svg" width="14" height="20" x="5" y="2" rx="2" ry="2"/><path xmlns="http://www.w3.org/2000/svg" d="M12 18L12.01 18"/>'
        },
        'smile': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="12" r="10"/><path xmlns="http://www.w3.org/2000/svg" d="M8 14s1.5 2 4 2 4-2 4-2"/><path xmlns="http://www.w3.org/2000/svg" d="M9 9L9.01 9"/><path xmlns="http://www.w3.org/2000/svg" d="M15 9L15.01 9"/>'
        },
        'speaker': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<rect xmlns="http://www.w3.org/2000/svg" width="16" height="20" x="4" y="2" rx="2" ry="2"/><circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="14" r="4"/><path xmlns="http://www.w3.org/2000/svg" d="M12 6L12.01 6"/>'
        },
        'square': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<rect xmlns="http://www.w3.org/2000/svg" width="18" height="18" x="3" y="3" rx="2" ry="2"/>'
        },
        'star': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z"/>'
        },
        'stop-circle': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="12" r="10"/><path xmlns="http://www.w3.org/2000/svg" d="M9 9H15V15H9z"/>'
        },
        'sun': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="12" r="5"/><path xmlns="http://www.w3.org/2000/svg" d="M12 1L12 3"/><path xmlns="http://www.w3.org/2000/svg" d="M12 21L12 23"/><path xmlns="http://www.w3.org/2000/svg" d="M4.22 4.22L5.64 5.64"/><path xmlns="http://www.w3.org/2000/svg" d="M18.36 18.36L19.78 19.78"/><path xmlns="http://www.w3.org/2000/svg" d="M1 12L3 12"/><path xmlns="http://www.w3.org/2000/svg" d="M21 12L23 12"/><path xmlns="http://www.w3.org/2000/svg" d="M4.22 19.78L5.64 18.36"/><path xmlns="http://www.w3.org/2000/svg" d="M18.36 5.64L19.78 4.22"/>'
        },
        'sunrise': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M17 18a5 5 0 0 0-10 0"/><path xmlns="http://www.w3.org/2000/svg" d="M12 2L12 9"/><path xmlns="http://www.w3.org/2000/svg" d="M4.22 10.22L5.64 11.64"/><path xmlns="http://www.w3.org/2000/svg" d="M1 18L3 18"/><path xmlns="http://www.w3.org/2000/svg" d="M21 18L23 18"/><path xmlns="http://www.w3.org/2000/svg" d="M18.36 11.64L19.78 10.22"/><path xmlns="http://www.w3.org/2000/svg" d="M23 22L1 22"/><path xmlns="http://www.w3.org/2000/svg" d="M8 6L12 2 16 6"/>'
        },
        'sunset': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M17 18a5 5 0 0 0-10 0"/><path xmlns="http://www.w3.org/2000/svg" d="M12 9L12 2"/><path xmlns="http://www.w3.org/2000/svg" d="M4.22 10.22L5.64 11.64"/><path xmlns="http://www.w3.org/2000/svg" d="M1 18L3 18"/><path xmlns="http://www.w3.org/2000/svg" d="M21 18L23 18"/><path xmlns="http://www.w3.org/2000/svg" d="M18.36 11.64L19.78 10.22"/><path xmlns="http://www.w3.org/2000/svg" d="M23 22L1 22"/><path xmlns="http://www.w3.org/2000/svg" d="M16 5L12 9 8 5"/>'
        },
        'tablet': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<rect xmlns="http://www.w3.org/2000/svg" width="16" height="20" x="4" y="2" rx="2" ry="2"/><path xmlns="http://www.w3.org/2000/svg" d="M12 18L12.01 18"/>'
        },
        'tag': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><path xmlns="http://www.w3.org/2000/svg" d="M7 7L7.01 7"/>'
        },
        'target': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="12" r="10"/><circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="12" r="6"/><circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="12" r="2"/>'
        },
        'terminal': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M4 17L10 11 4 5"/><path xmlns="http://www.w3.org/2000/svg" d="M12 19L20 19"/>'
        },
        'thermometer': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/>'
        },
        'thumbs-down': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"/>'
        },
        'thumbs-up': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>'
        },
        'toggle-left': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<rect xmlns="http://www.w3.org/2000/svg" width="22" height="14" x="1" y="5" rx="7" ry="7"/><circle xmlns="http://www.w3.org/2000/svg" cx="8" cy="12" r="3"/>'
        },
        'toggle-right': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<rect xmlns="http://www.w3.org/2000/svg" width="22" height="14" x="1" y="5" rx="7" ry="7"/><circle xmlns="http://www.w3.org/2000/svg" cx="16" cy="12" r="3"/>'
        },
        'tool': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>'
        },
        'trash': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M3 6L5 6 21 6"/><path xmlns="http://www.w3.org/2000/svg" d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>'
        },
        'trash-2': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M3 6L5 6 21 6"/><path xmlns="http://www.w3.org/2000/svg" d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path xmlns="http://www.w3.org/2000/svg" d="M10 11L10 17"/><path xmlns="http://www.w3.org/2000/svg" d="M14 11L14 17"/>'
        },
        'trello': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<rect xmlns="http://www.w3.org/2000/svg" width="18" height="18" x="3" y="3" rx="2" ry="2"/><path xmlns="http://www.w3.org/2000/svg" d="M7 7H10V16H7z"/><path xmlns="http://www.w3.org/2000/svg" d="M14 7H17V12H14z"/>'
        },
        'trending-down': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M23 18L13.5 8.5 8.5 13.5 1 6"/><path xmlns="http://www.w3.org/2000/svg" d="M17 18L23 18 23 12"/>'
        },
        'trending-up': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M23 6L13.5 15.5 8.5 10.5 1 18"/><path xmlns="http://www.w3.org/2000/svg" d="M17 6L23 6 23 12"/>'
        },
        'triangle': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>'
        },
        'truck': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M1 3H16V16H1z"/><path xmlns="http://www.w3.org/2000/svg" d="M16 8L20 8 23 11 23 16 16 16 16 8z"/><circle xmlns="http://www.w3.org/2000/svg" cx="5.5" cy="18.5" r="2.5"/><circle xmlns="http://www.w3.org/2000/svg" cx="18.5" cy="18.5" r="2.5"/>'
        },
        'tv': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<rect xmlns="http://www.w3.org/2000/svg" width="20" height="15" x="2" y="7" rx="2" ry="2"/><path xmlns="http://www.w3.org/2000/svg" d="M17 2L12 7 7 2"/>'
        },
        'twitch': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M21 2H3v16h5v4l4-4h5l4-4V2zM11 11V7M16 11V7"/>'
        },
        'twitter': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>'
        },
        'type': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M4 7L4 4 20 4 20 7"/><path xmlns="http://www.w3.org/2000/svg" d="M9 20L15 20"/><path xmlns="http://www.w3.org/2000/svg" d="M12 4L12 20"/>'
        },
        'umbrella': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"/>'
        },
        'underline': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"/><path xmlns="http://www.w3.org/2000/svg" d="M4 21L20 21"/>'
        },
        'unlock': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<rect xmlns="http://www.w3.org/2000/svg" width="18" height="11" x="3" y="11" rx="2" ry="2"/><path xmlns="http://www.w3.org/2000/svg" d="M7 11V7a5 5 0 0 1 9.9-1"/>'
        },
        'upload': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path xmlns="http://www.w3.org/2000/svg" d="M17 8L12 3 7 8"/><path xmlns="http://www.w3.org/2000/svg" d="M12 3L12 15"/>'
        },
        'upload-cloud': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M16 16L12 12 8 16"/><path xmlns="http://www.w3.org/2000/svg" d="M12 12L12 21"/><path xmlns="http://www.w3.org/2000/svg" d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/><path xmlns="http://www.w3.org/2000/svg" d="M16 16L12 12 8 16"/>'
        },
        'user': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="7" r="4"/>'
        },
        'user-check': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle xmlns="http://www.w3.org/2000/svg" cx="8.5" cy="7" r="4"/><path xmlns="http://www.w3.org/2000/svg" d="M17 11L19 13 23 9"/>'
        },
        'user-minus': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle xmlns="http://www.w3.org/2000/svg" cx="8.5" cy="7" r="4"/><path xmlns="http://www.w3.org/2000/svg" d="M23 11L17 11"/>'
        },
        'user-plus': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle xmlns="http://www.w3.org/2000/svg" cx="8.5" cy="7" r="4"/><path xmlns="http://www.w3.org/2000/svg" d="M20 8L20 14"/><path xmlns="http://www.w3.org/2000/svg" d="M23 11L17 11"/>'
        },
        'users': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle xmlns="http://www.w3.org/2000/svg" cx="9" cy="7" r="4"/><path xmlns="http://www.w3.org/2000/svg" d="M23 21v-2a4 4 0 0 0-3-3.87"/><path xmlns="http://www.w3.org/2000/svg" d="M16 3.13a4 4 0 0 1 0 7.75"/>'
        },
        'user-x': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle xmlns="http://www.w3.org/2000/svg" cx="8.5" cy="7" r="4"/><path xmlns="http://www.w3.org/2000/svg" d="M18 8L23 13"/><path xmlns="http://www.w3.org/2000/svg" d="M23 8L18 13"/>'
        },
        'video': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M23 7L16 12 23 17 23 7z"/><rect xmlns="http://www.w3.org/2000/svg" width="15" height="14" x="1" y="5" rx="2" ry="2"/>'
        },
        'video-off': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"/><path xmlns="http://www.w3.org/2000/svg" d="M1 1L23 23"/>'
        },
        'voicemail': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<circle xmlns="http://www.w3.org/2000/svg" cx="5.5" cy="11.5" r="4.5"/><circle xmlns="http://www.w3.org/2000/svg" cx="18.5" cy="11.5" r="4.5"/><path xmlns="http://www.w3.org/2000/svg" d="M5.5 16L18.5 16"/>'
        },
        'volume': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M11 5L6 9 2 9 2 15 6 15 11 19 11 5z"/>'
        },
        'volume-1': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M11 5L6 9 2 9 2 15 6 15 11 19 11 5z"/><path xmlns="http://www.w3.org/2000/svg" d="M15.54 8.46a5 5 0 0 1 0 7.07"/>'
        },
        'volume-2': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M11 5L6 9 2 9 2 15 6 15 11 19 11 5z"/><path xmlns="http://www.w3.org/2000/svg" d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>'
        },
        'volume-x': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M11 5L6 9 2 9 2 15 6 15 11 19 11 5z"/><path xmlns="http://www.w3.org/2000/svg" d="M23 9L17 15"/><path xmlns="http://www.w3.org/2000/svg" d="M17 9L23 15"/>'
        },
        'watch': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="12" r="7"/><path xmlns="http://www.w3.org/2000/svg" d="M12 9L12 12 13.5 13.5"/><path xmlns="http://www.w3.org/2000/svg" d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"/>'
        },
        'wifi': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M5 12.55a11 11 0 0 1 14.08 0"/><path xmlns="http://www.w3.org/2000/svg" d="M1.42 9a16 16 0 0 1 21.16 0"/><path xmlns="http://www.w3.org/2000/svg" d="M8.53 16.11a6 6 0 0 1 6.95 0"/><path xmlns="http://www.w3.org/2000/svg" d="M12 20L12.01 20"/>'
        },
        'wifi-off': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M1 1L23 23"/><path xmlns="http://www.w3.org/2000/svg" d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"/><path xmlns="http://www.w3.org/2000/svg" d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"/><path xmlns="http://www.w3.org/2000/svg" d="M10.71 5.05A16 16 0 0 1 22.58 9"/><path xmlns="http://www.w3.org/2000/svg" d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"/><path xmlns="http://www.w3.org/2000/svg" d="M8.53 16.11a6 6 0 0 1 6.95 0"/><path xmlns="http://www.w3.org/2000/svg" d="M12 20L12.01 20"/>'
        },
        'wind': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/>'
        },
        'x': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M18 6L6 18"/><path xmlns="http://www.w3.org/2000/svg" d="M6 6L18 18"/>'
        },
        'x-circle': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="12" r="10"/><path xmlns="http://www.w3.org/2000/svg" d="M15 9L9 15"/><path xmlns="http://www.w3.org/2000/svg" d="M9 9L15 15"/>'
        },
        'x-octagon': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M7.86 2L16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2z"/><path xmlns="http://www.w3.org/2000/svg" d="M15 9L9 15"/><path xmlns="http://www.w3.org/2000/svg" d="M9 9L15 15"/>'
        },
        'x-square': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<rect xmlns="http://www.w3.org/2000/svg" width="18" height="18" x="3" y="3" rx="2" ry="2"/><path xmlns="http://www.w3.org/2000/svg" d="M9 9L15 15"/><path xmlns="http://www.w3.org/2000/svg" d="M15 9L9 15"/>'
        },
        'youtube': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><path xmlns="http://www.w3.org/2000/svg" d="M9.75 15.02L15.5 11.75 9.75 8.48 9.75 15.02z"/>'
        },
        'zap': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M13 2L3 14 12 14 11 22 21 10 12 10 13 2z"/>'
        },
        'zap-off': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<path xmlns="http://www.w3.org/2000/svg" d="M12.41 6.75L13 2 10.57 4.92"/><path xmlns="http://www.w3.org/2000/svg" d="M18.57 12.91L21 10 15.66 10"/><path xmlns="http://www.w3.org/2000/svg" d="M8 8L3 14 12 14 11 22 16 16"/><path xmlns="http://www.w3.org/2000/svg" d="M1 1L23 23"/>'
        },
        'zoom-in': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<circle xmlns="http://www.w3.org/2000/svg" cx="11" cy="11" r="8"/><path xmlns="http://www.w3.org/2000/svg" d="M21 21L16.65 16.65"/><path xmlns="http://www.w3.org/2000/svg" d="M11 8L11 14"/><path xmlns="http://www.w3.org/2000/svg" d="M8 11L14 11"/>'
        },
        'zoom-out': {
            width: 24,
            height: 24,
            viewBox: [0, 0, 24, 24],
            data: '<circle xmlns="http://www.w3.org/2000/svg" cx="11" cy="11" r="8"/><path xmlns="http://www.w3.org/2000/svg" d="M21 21L16.65 16.65"/><path xmlns="http://www.w3.org/2000/svg" d="M8 11L14 11"/>'
        }
    },
    allIds: [
        'activity',
        'airplay',
        'alert-circle',
        'alert-octagon',
        'alert-triangle',
        'align-center',
        'align-justify',
        'align-left',
        'align-right',
        'anchor',
        'aperture',
        'archive',
        'arrow-down',
        'arrow-down-circle',
        'arrow-down-right',
        'arrow-down-left',
        'arrow-left',
        'arrow-left-circle',
        'arrow-right',
        'arrow-right-circle',
        'arrow-up',
        'arrow-up-circle',
        'arrow-up-left',
        'arrow-up-right',
        'at-sign',
        'award',
        'bar-chart',
        'bar-chart-2',
        'battery',
        'battery-charging',
        'bell',
        'bell-off',
        'bluetooth',
        'bold',
        'book',
        'bookmark',
        'book-open',
        'box',
        'briefcase',
        'calendar',
        'camera',
        'camera-off',
        'cast',
        'check',
        'check-circle',
        'check-square',
        'chevron-down',
        'chevron-left',
        'chevron-right',
        'chevrons-down',
        'chevrons-left',
        'chevrons-right',
        'chevrons-up',
        'chevron-up',
        'chrome',
        'circle',
        'clipboard',
        'clock',
        'cloud',
        'cloud-drizzle',
        'cloud-lightning',
        'cloud-off',
        'cloud-rain',
        'cloud-snow',
        'code',
        'codepen',
        'codesandbox',
        'coffee',
        'columns',
        'command',
        'compass',
        'copy',
        'corner-down-left',
        'corner-down-right',
        'corner-left-down',
        'corner-left-up',
        'corner-right-down',
        'corner-right-up',
        'corner-up-left',
        'corner-up-right',
        'cpu',
        'credit-card',
        'crop',
        'crosshair',
        'database',
        'delete',
        'disc',
        'divide',
        'divide-circle',
        'divide-square',
        'dollar-sign',
        'download',
        'download-cloud',
        'dribbble',
        'droplet',
        'edit',
        'edit-2',
        'edit-3',
        'external-link',
        'eye',
        'eye-off',
        'facebook',
        'fast-forward',
        'feather',
        'figma',
        'file',
        'file-minus',
        'file-plus',
        'file-text',
        'film',
        'filter',
        'flag',
        'folder',
        'folder-minus',
        'folder-plus',
        'framer',
        'frown',
        'gift',
        'git-branch',
        'git-commit',
        'github',
        'gitlab',
        'git-merge',
        'git-pull-request',
        'globe',
        'grid',
        'hard-drive',
        'hash',
        'headphones',
        'heart',
        'help-circle',
        'hexagon',
        'home',
        'image',
        'inbox',
        'info',
        'instagram',
        'italic',
        'key',
        'layers',
        'layout',
        'life-buoy',
        'link',
        'link-2',
        'linkedin',
        'list',
        'loader',
        'lock',
        'log-in',
        'log-out',
        'mail',
        'map',
        'map-pin',
        'maximize',
        'maximize-2',
        'meh',
        'menu',
        'message-circle',
        'message-square',
        'mic',
        'mic-off',
        'minimize',
        'minimize-2',
        'minus',
        'minus-circle',
        'minus-square',
        'monitor',
        'moon',
        'more-horizontal',
        'more-vertical',
        'mouse-pointer',
        'move',
        'music',
        'navigation',
        'navigation-2',
        'octagon',
        'package',
        'paperclip',
        'pause',
        'pause-circle',
        'pen-tool',
        'percent',
        'phone',
        'phone-call',
        'phone-forwarded',
        'phone-incoming',
        'phone-missed',
        'phone-off',
        'phone-outgoing',
        'pie-chart',
        'play',
        'play-circle',
        'plus',
        'plus-circle',
        'plus-square',
        'pocket',
        'power',
        'printer',
        'radio',
        'refresh-ccw',
        'refresh-cw',
        'repeat',
        'rewind',
        'rotate-ccw',
        'rotate-cw',
        'rss',
        'save',
        'scissors',
        'search',
        'send',
        'server',
        'settings',
        'share',
        'share-2',
        'shield',
        'shield-off',
        'shopping-bag',
        'shopping-cart',
        'shuffle',
        'sidebar',
        'skip-back',
        'skip-forward',
        'slack',
        'slash',
        'sliders',
        'smartphone',
        'smile',
        'speaker',
        'square',
        'star',
        'stop-circle',
        'sun',
        'sunrise',
        'sunset',
        'tablet',
        'tag',
        'target',
        'terminal',
        'thermometer',
        'thumbs-down',
        'thumbs-up',
        'toggle-left',
        'toggle-right',
        'tool',
        'trash',
        'trash-2',
        'trello',
        'trending-down',
        'trending-up',
        'triangle',
        'truck',
        'tv',
        'twitch',
        'twitter',
        'type',
        'umbrella',
        'underline',
        'unlock',
        'upload',
        'upload-cloud',
        'user',
        'user-check',
        'user-minus',
        'user-plus',
        'users',
        'user-x',
        'video',
        'video-off',
        'voicemail',
        'volume',
        'volume-1',
        'volume-2',
        'volume-x',
        'watch',
        'wifi',
        'wifi-off',
        'wind',
        'x',
        'x-circle',
        'x-octagon',
        'x-square',
        'youtube',
        'zap',
        'zap-off',
        'zoom-in',
        'zoom-out'
    ]
}


function SVG(props) {

    if (props.isHidden) {
        return <svg display='none'>{props.children}</svg>;
    }

    let file = files.byId[props.id];

    if (!file) return null;

    let width = props.width || file.width || null;
    let height = props.height || file.height || null;
    let viewBox = file.viewBox
        ? file.viewBox.join(' ')
        : '0 0 ' + props.width + ' ' + props.height;

    return props.isHidden
        ? <svg display='none'>{props.children}</svg>
        : (
            <svg
                xmlns='http://www.w3.org/2000/svg'
                version='1.1'
                preserveAspectRatio='xMinYMin'
                width={width}
                height={height}
                viewBox={viewBox}
            >
                <use xlinkHref={'#' + prefix + '-' + props.id}/>
            </svg>
        );

}


function SVGSource(props) {
    return (
        <SVG isHidden={true}>
            <defs>
                {files.allIds.reduce((defs, fileId, fileIndex) => {
                    const file = files.byId[fileId];
                    return defs.concat(
                        <g
                            key={fileIndex}
                            id={prefix + '-' + fileId}
                            dangerouslySetInnerHTML={{__html: file.data}}
                        >
                        </g>
                    );
                }, [])}
            </defs>
        </SVG>
    );

}

export {
    SVG,
    SVGSource
}