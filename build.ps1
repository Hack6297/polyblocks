# Build script for local testing on Windows

Write-Host "Building React frontend..." -ForegroundColor Green
Set-Location nesa-react-frontend
npm install
npm run build
Set-Location ..

Write-Host "Build complete!" -ForegroundColor Green
Write-Host "React app built to: nesa-react-frontend/build/"
