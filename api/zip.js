const archiver = require("archiver");
const fs = require("fs");
const os = require("os");
const path = require("path");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const files = req.body.files;

    if (!files || !Array.isArray(files)) {
      return res.status(400).json({
        error: "files array is required"
      });
    }

    const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "project-"));

    for (const file of files) {
      const filePath = path.join(tempDir, file.path);

      fs.mkdirSync(path.dirname(filePath), {
        recursive: true,
      });

      fs.writeFileSync(filePath, file.content);
    }

    res.setHeader(
      "Content-Disposition",
      "attachment; filename=project.zip"
    );

    res.setHeader("Content-Type", "application/zip");

    const archive = archiver("zip", {
      zlib: { level: 9 },
    });

    archive.pipe(res);

    archive.directory(tempDir, false);

    await archive.finalize();

  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: err.message,
    });
  }
};