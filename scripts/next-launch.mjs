import { createServer } from 'node:net'
import { spawnSync } from 'node:child_process'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const [mode, ...rest] = process.argv.slice(2)

if (!['dev', 'build', 'start'].includes(mode)) {
  console.error('Usage: node scripts/next-launch.mjs <dev|build|start> [extra next args]')
  process.exit(1)
}

const hasExplicitPort = rest.some((a) => a === '-p' || a === '--port' || a.startsWith('--port='))

function canBind(port) {
  return new Promise((resolve) => {
    const srv = createServer()
    srv.once('error', () => resolve(false))
    srv.once('listening', () => srv.close(() => resolve(true)))
    srv.listen(port, '0.0.0.0')
  })
}

async function findFreePort(startPort, maxPort = startPort + 50) {
  for (let port = startPort; port < maxPort; port++) {
    if (await canBind(port)) return port
  }
  throw new Error(`No free port found between ${startPort} and ${maxPort - 1}`)
}

let args = [mode, ...rest]

if (mode !== 'build' && !hasExplicitPort) {
  const base = Number(process.env.PORT) || 3000
  try {
    const port = await findFreePort(base)
    if (port !== base) {
      console.log(`Port ${base} is in use — switching to ${port}`)
      console.log(`Local: http://localhost:${port}`)
    }
    args = [mode, '-p', String(port), ...rest]
  } catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}

const nextBin = join(root, 'node_modules', 'next', 'dist', 'bin', 'next')
const result = spawnSync(process.execPath, [nextBin, ...args], {
  cwd: root,
  stdio: 'inherit',
})

process.exit(result.status ?? 1)
