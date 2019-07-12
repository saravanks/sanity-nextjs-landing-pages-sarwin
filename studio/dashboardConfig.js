export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d27d1f1b8a2b0ad104a1b7f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-sarwin-studio',
                  apiId: '3fb074d5-3286-40f6-8397-5add6bffdb0a'
                },
                {
                  buildHookId: '5d27d1f1cd5da76431bab114',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-sarwin',
                  apiId: '38f14199-f98e-486a-b09d-464c21fdb8aa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/saravanks/sanity-nextjs-landing-pages-sarwin',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-sarwin.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
