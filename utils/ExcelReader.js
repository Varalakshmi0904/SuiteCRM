const XLSX = require("xlsx");

class ExcelReader {
  constructor(filePath) {
    this.workbook = XLSX.readFile(filePath);
  }

  getTestData(sheetName, testCase) {
    const worksheet = this.workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(worksheet);

    const testData = data.find(row => row.testCase === testCase);

    if (!testData) {
        throw new Error(`Test case "${testCase}" not found in Excel sheet "${sheetName}"`);
    }

    return testData;
}


}

module.exports = { ExcelReader };
