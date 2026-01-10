
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sourcePath = path.join(__dirname, 'public', 'weaerhouse.json');
const destPath = path.join(__dirname, 'public', 'warehouse.json');

try {
  const rawData = fs.readFileSync(sourcePath, 'utf8');
  const warehouses = JSON.parse(rawData);

  const updatedWarehouses = warehouses.map(w => ({
    ...w,
    flowchart: "https://img.freepik.com/free-vector/gradient-workflow-chart-template_23-2149830889.jpg",
    // Ensure covered_area is an array if it's missing (though it looked present)
    covered_area: Array.isArray(w.covered_area) ? w.covered_area : [] 
  }));

  fs.writeFileSync(destPath, JSON.stringify(updatedWarehouses, null, 2));
  console.log(`Successfully migrated ${updatedWarehouses.length} warehouses to warehouse.json`);
} catch (error) {
  console.error('Error migrating data:', error);
}
