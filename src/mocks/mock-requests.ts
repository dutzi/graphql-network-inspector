import dedent from "dedent"

const url = "http://graphql-network-monitor.com/graphql"

const createRequest = ({
  request,
  response,
}: {
  request: {
    query?: string
    operationName?: string
    variables?: Record<string, unknown>
    extensions?: Record<string, unknown>
  }[]
  response: Record<string, unknown>
}) => {
  return {
    time: 1099.4580000406131,
    request: {
      url,
      headers: [
        {
          name: "Authorization",
          value:
            "Bearer eyJraWQiOiJ5cGQybUY5Z2oyeW1oMjY2MWFwdDE0S1ZpS0g5bFFYSjd3bmlqdytjK1RrPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI1Y2I1NTI4Yi01ZmYxLTRiNDItYTMxMy01ZTBkMDE0NDRmMzAiLCJjb2duaXRvOmdyb3VwcyI6WyJlbGRhZEBkZWVwZHViLmFpX3VzZXJfcmVhZCIsIkFkbWluIiwiVXNlcnMiLCJTdXBlckFkbWluIiwicHJvamVjdFNjb3BlZCIsImJmOWY4MGY4LTQ5NzQtNDIyMy04Yzc1LWMzODQ3ODFmZjdlMl9jdXN0b21lcl9yZWFkIiwiYmY5ZjgwZjgtNDk3NC00MjIzLThjNzUtYzM4NDc4MWZmN2UyX2N1c3RvbWVyX3ByaXZhdGUiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfc3k5aTlIQ2ltIiwidmVyc2lvbiI6MiwiY2xpZW50X2lkIjoiajdqMnU0ODVwc3NwOW45N21iNXNsYWxxOSIsIm9yaWdpbl9qdGkiOiJhYzg0NjczMi0wZWI0LTQyZWItYjA2NC00NjJlZWNmYTU3NzciLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIHBob25lIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNzA4MzQ5MDY2LCJleHAiOjE3MDkxMTgxNTAsImlhdCI6MTcwOTExNDU1MSwianRpIjoiNTczMmMzNzAtNzQwMi00YjQ1LWEwN2MtMmZkNWI4OGVhOTJmIiwidXNlcm5hbWUiOiJnb29nbGVfMTExODUyNTA0MTQyNjg0ODM5ODEwIn0.cTmi6P3IEi8MPaXa7axPw52Vx-N6JWJQbLMwckBtVtmhEwBxIVz5NNUgMJQWqlECkcBLaRuRoMed1UrWrmejK6vNVJG0F9hmUPLOQS0E6j5Qq7YtAXPwdQMAs5MJ6oazqlB9X_8-_JJSlL4MeZ_NT3GuZg5QWPFX_6pfNBdai5ChzW74OXEz7wwaPlHP1OxRUDtEM2e-i1YimSY16l8TJ2WdgKD-iJFHKLIG7vzT4gSvx2GOySUqRb44zsfAPbj98eLRHsiX0bpa_5rH22-A8zr3zlQGncn0o4wDnOOmS69sTFPtczbNlvtEuTqTj8GMMf_KwKgMwfL7iqbGAkTTyg",
        },
        {
          name: "access-control-allow-credentials",
          value: true,
        },
        {
          name: "access-control-allow-origin",
          value: "https://www.google.com",
        },
        {
          name: "set-cookie:",
          value:
            "SIDCC=fe0e8768-3b2f-4f63-983d-1a74c26dde1efe0e8768-3b2f-4f63-983d-1a74c26dde1e; expires=Thu, 14-Apr-2022 08:09:50 GMT; path=/; domain=.google.com; priority=high",
        },
      ],
      method: "POST",
      postData: {
        text: JSON.stringify(
          request.map(({ query, variables, extensions, operationName }) => ({
            query: query && dedent(query),
            operationName,
            variables,
            extensions,
          }))
        ),
      },
      headersSize: 698,
      bodySize: 578,
    },
    response: {
      status: 200,
      headers: [
        {
          name: "cookie",
          value:
            "CONSENT=YES+GB.en+20151113-21-1; ANID=fe0e8768-3b2f-4f63-983d-1a74c26dde1efe0e8768-3b2f-4f63-983d-1a74c26dde1efe0e8768-3b2f-4f63-983d-1a74c26dde1efe0e8768-3b2f-4f63-983d-1a74c26dde1efe0e8768-3b2f-4f63-983d-1a74c26dde1efe0e8768-3b2f-4f63-983d-1a74c26dde1efe0e8768-3b2f-4f63-983d-1a74c26dde1efe0e8768-3b2f-4f63-983d-1a74c26dde1efe0e8768-3b2f-4f63-983d-1a74c26dde1efe0e8768-3b2f-4f63-983d-1a74c26dde1efe0e8768-3b2f-4f63-983d-1a74c26dde1efe0e8768-3b2f-4f63-983d-1a74c26dde1efe0e8768-3b2f-4f63-983d-1a74c26dde1efe0e8768-3b2f-4f63-983d-1a74c26dde1efe0e8768-3b2f-4f63-983d-1a74c26dde1efe0e8768-3b2f-4f63-983d-1a74c26dde1e",
        },
      ],
      headersSize: 589,
      bodySize: 3364,
    },
    getContent: (cb: Function) => {
      cb(JSON.stringify(response))
    },
  }
}

export const mockRequests = [
  createRequest({
    request: [
      {
        query: `
          fragment NameParts on Person {
            firstName
            lastName
          }

          query getMovieQuery($title: String) {
            getMovie(title: $title) {
              id
              title
              genre
            }
          }
        `,
        variables: {
          title: "Batman",
        },
      },
    ],
    response: {
      data: {
        getMovie: {
          id: "1",
          title: "Batman",
          genre: "Action",
        },
      },
    },
  }),
  createRequest({
    request: [
      {
        query: `
          query searchMovieQuery($title: String) {
            searchMovie(title: $title) {
              id
              title
              genre
            }
          }
        `,
        variables: {
          title: "Batman",
        },
      },
    ],
    response: {
      data: {
        searchMovie: [
          {
            id: "1",
            title: "Batman",
            genre: "Action",
          },
          {
            id: "2",
            title: "American Psycho",
            genre: "Thriller",
          },
          {
            id: "3",
            title: "The Godfather",
            genre: "Drama",
          },
        ],
      },
    },
  }),
  createRequest({
    request: [
      {
        query: `
          mutation createMovieMutation($title: String, $genre: String) {
            createMovie(title: $title, genre: $genre) {
              id
              title
              genre
            }
          }
        `,
        variables: {
          title: "Batman",
        },
      },
    ],
    response: {
      data: {
        createMovie: {
          id: "4",
          title: "Batman Again",
          genre: "Action",
        },
      },
      extensions: {
        tracing: {
          version: 1,
          startTime: "2021-01-01T00:00:00.000Z",
          endTime: "2021-01-01T00:00:00.100Z",
          duration: 100 * 1000000,
          execution: {
            resolvers: [
              {
                path: ["createMovie"],
                parentType: "Mutation",
                fieldName: "createMovie",
                returnType: "Movie",
                startOffset: 10 * 1000000,
                duration: 5 * 1000000,
              },
              {
                path: ["createMovie", "id"],
                parentType: "Movie",
                fieldName: "id",
                returnType: "ID!",
                startOffset: 15 * 1000000,
                duration: 15 * 1000000,
              },
              {
                path: ["createMovie", "title"],
                parentType: "Movie",
                fieldName: "title",
                returnType: "String",
                startOffset: 15 * 1000000,
                duration: 75 * 1000000,
              },
              {
                path: ["createMovie", "genre"],
                parentType: "Movie",
                fieldName: "genre",
                returnType: "String",
                startOffset: 15 * 1000000,
                duration: 80 * 1000000,
              },
            ],
          },
        },
      },
    },
  }),
  createRequest({
    request: [
      {
        query: `
          query {
            listActors {
              id
              name
            }
          }
        `,
        variables: {},
      },
      {
        query: `
          query {
            listCategories {
              id
              title
            }
          }
        `,
        variables: {},
      },
    ],
    response: {
      data: {
        listActors: [
          {
            id: "1",
            name: "Tom Hanks",
          },
          {
            id: "2",
            name: "Robert De Niro",
          },
          {
            id: "3",
            name: "Brad Pitt",
          },
        ],
        listCategories: [
          {
            id: "1",
            name: "Action",
          },
          {
            id: "2",
            name: "Horror",
          },
        ],
      },
      extensions: {
        tracing: {
          version: 1,
          startTime: "2021-01-01T00:00:00.000Z",
          endTime: "2021-01-01T00:00:00.100Z",
          duration: 100 * 1000000,
          execution: {
            resolvers: [
              {
                path: ["listActors"],
                parentType: "Query",
                fieldName: "listActors",
                returnType: "Actor",
                startOffset: 10 * 1000000,
                duration: 88 * 1000000,
              },
              {
                path: ["listCategories"],
                parentType: "Query",
                fieldName: "listCategories",
                returnType: "Category",
                startOffset: 10 * 1000000,
                duration: 75 * 1000000,
              },
              {
                path: ["listCategories", 0, "id"],
                parentType: "Category",
                fieldName: "id",
                returnType: "ID!",
                startOffset: 85 * 1000000,
                duration: 1 * 10000,
              },
              {
                path: ["listCategories", 0, "name"],
                parentType: "Category",
                fieldName: "name",
                returnType: "String",
                startOffset: 85 * 1000000,
                duration: 1 * 10000,
              },
              {
                path: ["listCategories", 1, "id"],
                parentType: "Category",
                fieldName: "id",
                returnType: "ID!",
                startOffset: 85 * 1000000,
                duration: 1 * 1000000,
              },
              {
                path: ["listCategories", 1, "name"],
                parentType: "Category",
                fieldName: "name",
                returnType: "String",
                startOffset: 85 * 1000000,
                duration: 1 * 1000000,
              },
              {
                path: ["listActors", 0, "id"],
                parentType: "Actor",
                fieldName: "id",
                returnType: "ID!",
                startOffset: 98 * 1000000,
                duration: 1 * 1000000,
              },
              {
                path: ["listActors", 0, "name"],
                parentType: "Actor",
                fieldName: "name",
                returnType: "String",
                startOffset: 98 * 1000000,
                duration: 1 * 1000000,
              },
              {
                path: ["listActors", 1, "id"],
                parentType: "Actor",
                fieldName: "id",
                returnType: "ID!",
                startOffset: 98 * 1000000,
                duration: 1 * 1000000,
              },
              {
                path: ["listActors", 1, "name"],
                parentType: "Actor",
                fieldName: "name",
                returnType: "String",
                startOffset: 98 * 1000000,
                duration: 1 * 1000000,
              },
              {
                path: ["listActors", 2, "id"],
                parentType: "Actor",
                fieldName: "id",
                returnType: "ID!",
                startOffset: 98 * 1000000,
                duration: 2 * 1000000,
              },
              {
                path: ["listActors", 2, "name"],
                parentType: "Actor",
                fieldName: "name",
                returnType: "String",
                startOffset: 98 * 1000000,
                duration: 2 * 1000000,
              },
            ],
          },
        },
      },
    },
  }),
  createRequest({
    request: [
      {
        query: `
          query actorDetailsQuery($id: String) {
            actorDetails(id: $id) {
              ...actorDetailsData
              __typename
            }
          }
          fragment actorDetailsData on ActorDetail {
            id
            name
            __typename
          }
        `,
        variables: {
          id: "2",
        },
      },
    ],
    response: {
      data: {
        actorDetails: [],
      },
      extensions: {
        tracing: {
          version: 1,
          startTime: "2021-01-01T00:00:00.000Z",
          endTime: "2021-01-01T00:00:00.010Z",
          duration: 1173.12 * 1000000,
          execution: {
            resolvers: [
              {
                path: ["actorDetails"],
                parentType: "Query",
                fieldName: "actorDetails",
                returnType: "ActorDetail",
                startOffset: 1.187133 * 1000000,
                duration: 1171.787124 * 1000000,
              },
              {
                path: ["actorDetails", "test"],
                parentType: "ActorDetail",
                fieldName: "test",
                returnType: "string",
                startOffset: 1172.974257 * 1000000,
                duration: 0.02 * 1000000,
              },
            ],
          },
        },
      },
    },
  }),
  createRequest({
    request: [
      {
        operationName: "hasUnseenAnnouncements",
        extensions: {
          persistedQuery: {
            version: 1,
            sha256Hash:
              "ecf4edb46db40b5132295c0291d62fb65d6759a9eedfa4d5d612dd5ec54a6b38",
          },
          variables: btoa('{"language":"pt"}'),
        },
      },
    ],
    response: {
      data: {
        hasUnseenAnnouncements: true,
      },
    },
  }),
  createRequest({
    request: [
      {
        query: `
          query actorDetailsQuery($id: String) {
            actorDetails(id: $id) {
              ...actorDetailsData
              __typename
            }
          }
          fragment actorDetailsData on ActorDetail {
            id
            name
            __typename
          }
        `,
        variables: {
          id: "3",
        },
      },
    ],
    response: {
      errors: [
        {
          message: "Details for actor with ID 3 could not be fetched",
        },
      ],
    },
  }),
  // WebSocket (GraphQL subscription)
  {
    startedDateTime: "2021-01-01T00:00:00.000Z",
    time: 1099.4580000406131,
    request: {
      url: "ws://graphql-network-monitor.com/graphql",
      method: "GET",
      headers: [
        {
          name: "Authorization",
          value:
            "Bearer eyJraWQiOiJ5cGQybUY5Z2oyeW1oMjY2MWFwdDE0S1ZpS0g5bFFYSjd3bmlqdytjK1RrPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI1Y2I1NTI4Yi01ZmYxLTRiNDItYTMxMy01ZTBkMDE0NDRmMzAiLCJjb2duaXRvOmdyb3VwcyI6WyJlbGRhZEBkZWVwZHViLmFpX3VzZXJfcmVhZCIsIkFkbWluIiwiVXNlcnMiLCJTdXBlckFkbWluIiwicHJvamVjdFNjb3BlZCIsImJmOWY4MGY4LTQ5NzQtNDIyMy04Yzc1LWMzODQ3ODFmZjdlMl9jdXN0b21lcl9yZWFkIiwiYmY5ZjgwZjgtNDk3NC00MjIzLThjNzUtYzM4NDc4MWZmN2UyX2N1c3RvbWVyX3ByaXZhdGUiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfc3k5aTlIQ2ltIiwidmVyc2lvbiI6MiwiY2xpZW50X2lkIjoiajdqMnU0ODVwc3NwOW45N21iNXNsYWxxOSIsIm9yaWdpbl9qdGkiOiJhYzg0NjczMi0wZWI0LTQyZWItYjA2NC00NjJlZWNmYTU3NzciLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIHBob25lIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNzA4MzQ5MDY2LCJleHAiOjE3MDkxMTgxNTAsImlhdCI6MTcwOTExNDU1MSwianRpIjoiNTczMmMzNzAtNzQwMi00YjQ1LWEwN2MtMmZkNWI4OGVhOTJmIiwidXNlcm5hbWUiOiJnb29nbGVfMTExODUyNTA0MTQyNjg0ODM5ODEwIn0.cTmi6P3IEi8MPaXa7axPw52Vx-N6JWJQbLMwckBtVtmhEwBxIVz5NNUgMJQWqlECkcBLaRuRoMed1UrWrmejK6vNVJG0F9hmUPLOQS0E6j5Qq7YtAXPwdQMAs5MJ6oazqlB9X_8-_JJSlL4MeZ_NT3GuZg5QWPFX_6pfNBdai5ChzW74OXEz7wwaPlHP1OxRUDtEM2e-i1YimSY16l8TJ2WdgKD-iJFHKLIG7vzT4gSvx2GOySUqRb44zsfAPbj98eLRHsiX0bpa_5rH22-A8zr3zlQGncn0o4wDnOOmS69sTFPtczbNlvtEuTqTj8GMMf_KwKgMwfL7iqbGAkTTyg",
        },
      ],
    },
    response: {
      status: 101,
      headers: [
        {
          name: "Authorization",
          value:
            "Bearer eyJraWQiOiJ5cGQybUY5Z2oyeW1oMjY2MWFwdDE0S1ZpS0g5bFFYSjd3bmlqdytjK1RrPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI1Y2I1NTI4Yi01ZmYxLTRiNDItYTMxMy01ZTBkMDE0NDRmMzAiLCJjb2duaXRvOmdyb3VwcyI6WyJlbGRhZEBkZWVwZHViLmFpX3VzZXJfcmVhZCIsIkFkbWluIiwiVXNlcnMiLCJTdXBlckFkbWluIiwicHJvamVjdFNjb3BlZCIsImJmOWY4MGY4LTQ5NzQtNDIyMy04Yzc1LWMzODQ3ODFmZjdlMl9jdXN0b21lcl9yZWFkIiwiYmY5ZjgwZjgtNDk3NC00MjIzLThjNzUtYzM4NDc4MWZmN2UyX2N1c3RvbWVyX3ByaXZhdGUiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfc3k5aTlIQ2ltIiwidmVyc2lvbiI6MiwiY2xpZW50X2lkIjoiajdqMnU0ODVwc3NwOW45N21iNXNsYWxxOSIsIm9yaWdpbl9qdGkiOiJhYzg0NjczMi0wZWI0LTQyZWItYjA2NC00NjJlZWNmYTU3NzciLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIHBob25lIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNzA4MzQ5MDY2LCJleHAiOjE3MDkxMTgxNTAsImlhdCI6MTcwOTExNDU1MSwianRpIjoiNTczMmMzNzAtNzQwMi00YjQ1LWEwN2MtMmZkNWI4OGVhOTJmIiwidXNlcm5hbWUiOiJnb29nbGVfMTExODUyNTA0MTQyNjg0ODM5ODEwIn0.cTmi6P3IEi8MPaXa7axPw52Vx-N6JWJQbLMwckBtVtmhEwBxIVz5NNUgMJQWqlECkcBLaRuRoMed1UrWrmejK6vNVJG0F9hmUPLOQS0E6j5Qq7YtAXPwdQMAs5MJ6oazqlB9X_8-_JJSlL4MeZ_NT3GuZg5QWPFX_6pfNBdai5ChzW74OXEz7wwaPlHP1OxRUDtEM2e-i1YimSY16l8TJ2WdgKD-iJFHKLIG7vzT4gSvx2GOySUqRb44zsfAPbj98eLRHsiX0bpa_5rH22-A8zr3zlQGncn0o4wDnOOmS69sTFPtczbNlvtEuTqTj8GMMf_KwKgMwfL7iqbGAkTTyg",
        },
      ],
    },
    _resourceType: "websocket",
    _webSocketMessages: [
      {
        data: JSON.stringify({
          payload: {
            query: "subscription { reviewAdded { stars episode } }",
            variables: {},
          },
        }),
        opcode: 1,
        time: 1699975911.862162,
        type: "send",
      },
      {
        data: JSON.stringify({
          payload: {
            data: { reviewAdded: { stars: 4, episode: "CLONE_WARS" } },
          },
        }),
        opcode: 1,
        time: 1699975911.862162,
        type: "receive",
      },
      {
        data: JSON.stringify({
          payload: {
            data: { reviewAdded: { stars: 4, episode: "NEWHOPE" } },
          },
        }),
        opcode: 1,
        time: 1699975982.2748342,
        type: "receive",
      },
    ],
  },
]
