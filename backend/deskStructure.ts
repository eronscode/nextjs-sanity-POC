import pagesTypes from './structure/pages'
import blogTypes from './structure/blog'
import widgetsTypes from './structure/widgets'
import settingsTypes from './structure/settings'
import navigationTypes from './structure/menu'

export default (S: any) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              ...pagesTypes.map((element: any) =>
                S.listItem().title(element.title).child(S.documentTypeList(element.schema))
              ),
            ])
        ),
      S.divider(),
      S.listItem()
        .title('Blog')
        .child(
          S.list()
            .title('Blog')
            .items([
              ...blogTypes.map((element: any) =>
                S.listItem().title(element.title).child(S.documentTypeList(element.schema))
              ),
            ])
        ),
      S.divider(),
      S.listItem()
        .title('Widgets')
        .child(
          S.list()
            .title('Widgets')
            .items([
              ...widgetsTypes.map((element: any) =>
                S.listItem().title(element.title).child(S.documentTypeList(element.schema))
              ),
            ])
        ),
      S.divider(),
      S.listItem()
        .title('Navigation Menu')
        .child(
          S.list()
            .title('Navigation Menu')
            .items([
              ...navigationTypes.map((element: any) =>
                S.listItem().title(element.title).child(S.documentTypeList(element.schema))
              ),
            ])
        ),
      S.divider(),
      S.listItem()
        .title('Settings')
        .child(
          S.list()
            .title('Settings')
            .items([
              ...settingsTypes.map((element: any) =>
                S.listItem().title(element.title).child(S.documentTypeList(element.schema))
              ),
            ])
        ),
    ])
