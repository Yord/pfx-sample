const {anything, assert, property} = require('fast-check')
const {func: applier} = require('./sample')

test('does not apply function, returns input unchanged as output', () => {
  const fs    = anything()
  const argv  = anything().chain(verbose => constant({verbose}))
  const jsons = anything()
  const lines = anything()

  assert(
    property(jsons, lines, (jsons, lines) =>
      expect(
        applier(fs, argv)(jsons, lines)
      ).toStrictEqual(
        {err: [], jsons: []}
      )
    )
  )
})