// Test script to check if ServiceAreaPageLayout can be imported
try {
  const { ServiceAreaPageLayout } = require('./src/components/PageLayout.tsx');
  console.log('ServiceAreaPageLayout imported successfully:', typeof ServiceAreaPageLayout);
} catch (error) {
  console.error('Error importing ServiceAreaPageLayout:', error.message);
}
