import {Command, flags} from '@oclif/command'

export default class ExposeOnWeb extends Command {
  static description = 'Expost http://localhost port on web  https://publichostname?? '

  static examples = [
    `$ example-multi-ts hello
hello world from ./src/hello.ts!
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    port: flags.integer({char: 'p', description: 'port No'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(ExposeOnWeb)

    const port = flags.port ?? 80
    this.log(`hello ${port} from ./src/commands/exposeOnWeb.ts`)
    
  }
}
