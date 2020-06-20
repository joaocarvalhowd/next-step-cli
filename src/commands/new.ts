module.exports = {
  name: 'new',
  alias: 'n',
  run: async function(toolbox) {
    const { print } = toolbox

    print.success(`${print.checkmark} Created!`)
  }
}
