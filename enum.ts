enum Job {
    Frontend,
    Backend=50,
    Designer
}

const job: Job = Job.Backend // 50

console.log(job)

function throwNewError(err: string) : never  {
    throw new Error(err)
}

let myNumber: number | null = 20
myNumber = null