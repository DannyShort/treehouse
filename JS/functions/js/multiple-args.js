function getArea (width, length, unit) {
    const AREA = width * length;
    return `${AREA} ${unit}`;
}

module.exports = getArea;
