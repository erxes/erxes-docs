import Image from 'next/image'

import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import logoMongodb from '@/images/logos/mongodb.svg'
import logoTypescript from '@/images/logos/typescript.svg'
import logoGraphql from '@/images/logos/graphql.svg'
import logoExpress from '@/images/logos/expressjs.svg'
import logoRedis from '@/images/logos/redis.svg'
import logoRabbitMQ from '@/images/logos/rabbitmq.svg'


const libraries = [
  {
    href: '#',
    name: 'Typescript',
    description:
      'TypeScript is a popular choice for programmers accustomed to other languages with static typing, such as C# and Java.',
    logo: logoTypescript,
  },
  {
    href: '#',
    name: 'Graphql',
    description:
      'GraphQL is a query language for your API, and a server-side runtime for executing queries using a type system you define for your data. ',
    logo: logoGraphql,
  },
  {
    href: '#',
    name: 'Express.js',
    description:
      'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. ',
    logo: logoExpress,
  },
  {
    href: '#',
    name: 'Mongodb',
    description:
      'MongoDB empowers innovators to create, transform, and disrupt industries by unleashing the power of software and data.',
    logo: logoMongodb,
  },
  {
    href: '#',
    name: 'Redis',
    description:
      'Redis is an open source (BSD licensed), in-memory data structure store used as a database, cache, message broker, and streaming engine.',
    logo: logoRedis,
  },
]

export function Libraries() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="official-libraries">
      Plugin API
      </Heading>
      <p>Plugin development in API part requires the following software prerequisites to be already installed on your computer.</p>
      <div className="not-prose mt-4 grid grid-cols-1 gap-x-6 gap-y-10 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:max-w-none xl:grid-cols-3">
        {libraries.map((library) => (
          <div key={library.name} className="flex flex-row-reverse gap-6">
            <div className="flex-auto">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                {library.name}
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {library.description}
              </p>
              <p className="mt-4">
                <Button href={library.href} variant="text" arrow="right">
                  Read more
                </Button>
              </p>
            </div>
            <Image
              src={library.logo}
              alt=""
              className="h-12 w-12"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  )
}
