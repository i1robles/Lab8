const formatVolumeIconPath = require('../assets/scripts/main');


describe('format volume icon path', () => {
    test('high volume output', () => {
        expect(formatVolumeIconPath(100)).toContain('./assets/media/icons/volume-level-3.svg');
    });
  
    test('medium volume output', () => {
        expect(formatVolumeIconPath(50)).toContain('./assets/media/icons/volume-level-2.svg');
    });

    test('low volume output', () => {
        expect(formatVolumeIconPath(30)).toContain('./assets/media/icons/volume-level-1.svg');
    });
    
    test('muted output', () => {
        expect(formatVolumeIconPath(0)).toContain('./assets/media/icons/volume-level-0.svg');
    });

    
});