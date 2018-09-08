main_page = {
    key: "main_page",
    data() {
      return {
        carouselIndex: 0,
        items: [
          {
            className: 'ginger-cat-1'
          },
          {
            className: 'ginger-cat-2'
          },
          {
            className: 'ginger-cat-3'
          },
          {
            className: 'ginger-cat-4'
          },
          {
            className: 'ginger-cat-5'
          }
        ],
        dots: {
          textAlign: 'center',
          fontSize: '30px',
          color: '#fff',
          position: 'absolute',
          bottom: '40px',
          left: 0,
          right: 0
        }
      };
    },
    methods: {
      meow: function () {
        console.log('meow')
      },
        notify_to_about: function () {
            // https://onsen.io/v2/api/vue/$ons.notification.html
            vm.$ons.notification.confirm({
                    message: i18n.t("Are you sure to visit About?"),
                    callback: function (_result) {
                        console.log(_result);
                        if (_result === 1) {
                            onsenui_helper.switch_page(about)
                        }
                    }
                });
        },
        share_json_to_ods: function () {
            var _filename = "test.ods";
            var _data = {
                'global': {
                    "version": CONFIG.version,
                    "author": "布丁布丁吃布丁",
                    "time": PULI_UTILS.get_yyyymmdd_hhmm(),
                },
                'data': [
                    {
                        col1: "1-1",
                        col2: "1-2",
                    },
                    {
                        col1: "2-1",
                        col2: "2-2",
                    },
                ]
            };

            var _filters = [
                {
                    name: "Open Document Spreadsheet",
                    extensions: ["ods"]
                }
            ];

            var _mime = "application/vnd.oasis.opendocument.spreadsheet";

            try {
                var _content = xlsx_helper_create("ods", _filename, _data);
                hybird_app_helper.save_as(_filename, _content, _mime, _filters);
            }
            catch (e) {
                alert(e);
            }
        }
    }
};
