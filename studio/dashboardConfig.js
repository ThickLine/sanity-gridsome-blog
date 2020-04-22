export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5ea032cd926b0b08280c5352',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-ur9wehzz',
                  apiId: '7ff445f3-08d2-4749-826d-baa2d518eedf'
                },
                {
                  buildHookId: '5ea032ce926b0b878d0c587a',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-vf1gzrft',
                  apiId: '4a2cafab-0d16-429f-b618-468c5cd1536a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ThickLine/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-vf1gzrft.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
