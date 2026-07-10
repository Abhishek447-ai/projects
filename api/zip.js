const archiver = require("archiver");
const fs = require("fs");
const os = require("os");
const path = require("path");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { projectName, files } = req.body;

    if (!files || !Array.isArray(files)) {
      return res.status(400).json({
        error: "files array is required",
      });
    }

    // Use project name as root folder
    const rootFolder = projectName || "PROJECT";

    const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "project-"));

    for (const file of files) {
      if (!file.path || typeof file.path !== "string") continue;

      const filePath = path.join(tempDir, rootFolder, file.path);

      fs.mkdirSync(path.dirname(filePath), {
        recursive: true,
      });

      const content = String(file.content || "")
        .replace(/\\n/g, "\n")
        .replace(/\\t/g, "\t")
        .replace(/\\"/g, '"')
        .replace(/\\\\/g, "\\");

      fs.writeFileSync(filePath, content, "utf8");
    }

    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${rootFolder}.zip`
    );

    res.setHeader("Content-Type", "application/zip");

    const archive = archiver("zip", {
      zlib: { level: 9 },
    });

    archive.pipe(res);

    // Include the project root folder in the ZIP
    archive.directory(path.join(tempDir, rootFolder), rootFolder);

    await archive.finalize();

  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: err.message,
    });
  }
};