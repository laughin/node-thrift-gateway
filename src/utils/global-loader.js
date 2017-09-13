import glob from 'glob'

export default function (dirname, filename) {
  return new Promise((resolve, reject) => {
    const arr = []
    glob(`${dirname}${filename}`, {
      ignore: '**/index.js',
      nodir: true
    }, (err, files) => {
      if (err) {
        return reject(err)
      }
      files.forEach(file => {
        arr.push(require(file))// eslint-disable-line global-require, import/no-dynamic-require
      })
      return resolve(arr)
    })
  })
}
