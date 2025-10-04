#!/bin/bash

# Find all files that still have malformed metadata
find src/app/service-areas -name "*.tsx" -exec grep -l "title: '\[\^'\]\+'" {} \; | while read file; do
  echo "Fixing $file"
  # Replace the malformed title
  sed -i "s/title: '\[\^'\]\+',/title: 'Custom Kitchen Services | PineWood Cabinets',/g" "$file"
  # Replace the malformed description
  sed -i "s/description: '\[\^'\]\+',/description: 'Professional bespoke kitchen design and construction for Monterey Bay luxury homes.',/g" "$file"
done

echo "Fixed all remaining malformed metadata files"
