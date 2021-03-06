m_require('app/views/tabs.js');
m_require('app/views/controls_page.js');
m_require('app/views/controls_searchbar_view_page.js');

KitchenSink.ControlsSearchBarViewPage1 = M.PageView.design({
    
    childViews: 'header content tabBar',

    header: M.ToolbarView.design({

        childViews: 'backButton title',

        backButton: M.ButtonView.design({

            value: 'Back',

            icon: 'arrow-l',

            anchorLocation: M.LEFT,

            target: KitchenSink.ControlsSearchBarViewController,

            action: 'here'

        }),

        title: M.LabelView.design({

            value: 'Default searchbar',

            anchorLocation: M.CENTER
            
        }),
        
        anchorLocation: M.TOP

    }),

    content: M.ScrollView.design({

        childViews: 'searchbar markupTitle markup',

        searchbar: M.SearchBarView.design({}),

        markupTitle: M.LabelView.design({

            value: 'Sourcecode',
            cssClass: 'titleSource'

        }),

        markup: M.LabelView.design({

            value: 'M.SearchBarView.design({})',

            cssClass: 'source'

        })

    }),

    tabBar: KitchenSink.TabBar

});