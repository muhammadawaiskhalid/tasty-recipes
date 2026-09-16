const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const imagesDir = path.join(__dirname, "../assets/images");
const backupDir = path.join(__dirname, "../assets/images-backup");

const MAX_WIDTH = 2400;
const JPEG_QUALITY = 85;

async function optimizeImages() {
    // Create backup folder
    if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
    }

    const files = fs.readdirSync(imagesDir);

    const imageFiles = files.filter((file) =>
        /\.(jpg|jpeg|png)$/i.test(file)
    );

    console.log(`\nFound ${imageFiles.length} images.\n`);

    for (const file of imageFiles) {
        const inputPath = path.join(imagesDir, file);
        const backupPath = path.join(backupDir, file);
        const tempPath = path.join(imagesDir, `temp-${file}`);

        // Backup original only once
        if (!fs.existsSync(backupPath)) {
            fs.copyFileSync(inputPath, backupPath);
        }

        const metadata = await sharp(inputPath).metadata();

        const originalSize = fs.statSync(inputPath).size;

        let pipeline = sharp(inputPath)
            .rotate()
            .resize({
                width: MAX_WIDTH,
                withoutEnlargement: true
            });

        const extension = path.extname(file).toLowerCase();

        if (extension === ".jpg" || extension === ".jpeg") {
            pipeline = pipeline.jpeg({
                quality: JPEG_QUALITY,
                mozjpeg: true
            });
        } else if (extension === ".png") {
            pipeline = pipeline.png({
                compressionLevel: 9
            });
        }

        await pipeline.toFile(tempPath);

        const optimizedSize = fs.statSync(tempPath).size;

        fs.renameSync(tempPath, inputPath);

        const savedPercent =
            ((originalSize - optimizedSize) / originalSize) * 100;

        console.log(
            `${file}: ${metadata.width}x${metadata.height} | ` +
            `${(originalSize / 1024 / 1024).toFixed(2)} MB → ` +
            `${(optimizedSize / 1024 / 1024).toFixed(2)} MB | ` +
            `${savedPercent.toFixed(1)}% saved`
        );
    }

    console.log("\n✓ Image optimization complete.");
    console.log("✓ Originals saved in assets/images-backup\n");
}

optimizeImages().catch((error) => {
    console.error("\nImage optimization failed:");
    console.error(error);
    process.exit(1);
});