function BitmapHeader(buffer) {
    this.pixelOffset = buffer.readInt32LE(10);
}

module.exports = BitmapHeader;