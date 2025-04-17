@echo off
echo Clearing Next.js cache and reinstalling dependencies...

echo 1. Removing .next folder
if exist .next (
  rmdir /s /q .next
)

echo 2. Removing node_modules folder
if exist node_modules (
  rmdir /s /q node_modules
)

echo 3. Installing dependencies
npm install

echo 4. Running build
npm run build

echo Done!
pause
