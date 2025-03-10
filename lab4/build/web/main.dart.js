// Generated by DDC, the Dart Development Compiler (to JavaScript).
// Version: 2.19.2 (stable) (Tue Feb 7 18:37:17 2023 +0000) on "linux_x64"
// Module: zapp_user_main
// Flags: soundNullSafety(true), enableAsserts(true)
define('zapp_user_main', ['dart_sdk', 'flutter_sdk'], (function load__zapp_user_main(dart_sdk, flutter_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const js = dart_sdk.js;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app = flutter_sdk.src__material__app;
  const framework = flutter_sdk.src__widgets__framework;
  const scaffold = flutter_sdk.src__material__scaffold;
  const app_bar = flutter_sdk.src__material__app_bar;
  const text = flutter_sdk.src__widgets__text;
  const colors = flutter_sdk.src__material__colors;
  const single_child_scroll_view = flutter_sdk.src__widgets__single_child_scroll_view;
  const basic = flutter_sdk.src__widgets__basic;
  const flex = flutter_sdk.src__rendering__flex;
  const image = flutter_sdk.src__widgets__image;
  const box_fit = flutter_sdk.src__painting__box_fit;
  const edge_insets = flutter_sdk.src__painting__edge_insets;
  const text_style = flutter_sdk.src__painting__text_style;
  const icon_button = flutter_sdk.src__material__icon_button;
  const icon$ = flutter_sdk.src__widgets__icon;
  const icons = flutter_sdk.src__material__icons;
  const icon_data = flutter_sdk.src__widgets__icon_data;
  const binding = flutter_sdk.src__widgets__binding;
  var $46zapp_entry = Object.create(dart.library);
  var main = Object.create(dart.library);
  var web_plugin_registrant = Object.create(dart.library);
  var $toString = dartx.toString;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ListOfString: () => (T.ListOfString = dart.constFn(core.List$(core.String)))(),
    ListOfStringTodynamic: () => (T.ListOfStringTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T.ListOfString()])))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    dynamicToNull: () => (T.dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))(),
    VoidToNull: () => (T.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    ObjectAndStackTraceTovoid: () => (T.ObjectAndStackTraceTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace])))(),
    ZoneAndZoneDelegateAndZone__Tovoid: () => (T.ZoneAndZoneDelegateAndZone__Tovoid = dart.constFn(dart.fnType(dart.void, [async.Zone, async.ZoneDelegate, async.Zone, core.String])))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(main.main, T.VoidTovoid());
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 16,
        [EdgeInsets_right]: 16,
        [EdgeInsets_top]: 16,
        [EdgeInsets_left]: 16
      });
    }
  }, false);
  var C = Array(2).fill(void 0);
  var I = ["file:///zapp/project/lib/main.dart"];
  $46zapp_entry.runAppGuarded = function runAppGuarded() {
    async.runZonedGuarded(core.Null, dart.fn(() => {
      if (T.ListOfStringTodynamic().is(C[0] || CT.C0)) {
        T.ListOfStringTodynamic().as(C[0] || CT.C0)(T.JSArrayOfString().of([]));
      } else {
        (C[0] || CT.C0)();
      }
      if (js.context.hasProperty("__notifyFlutterRendered")) {
        async.Future.delayed(new core.Duration.new({milliseconds: 250})).then(core.Null, dart.fn(_ => {
          js.context.callMethod("__notifyFlutterRendered", [false]);
        }, T.dynamicToNull()));
      }
    }, T.VoidToNull()), dart.fn((e, stackTrace) => {
      if (js.context.hasProperty("zappHandlerUserError")) {
        js.context.callMethod("zappHandlerUserError", [e[$toString](), stackTrace.toString()]);
      }
    }, T.ObjectAndStackTraceTovoid()), {zoneSpecification: new async._ZoneSpecification.new({print: dart.fn((self, parent, zone, line) => {
          if (js.context.hasProperty("zappHandlerUserPrint")) {
            js.context.callMethod("zappHandlerUserPrint", [line]);
          }
        }, T.ZoneAndZoneDelegateAndZone__Tovoid())})});
  };
  $46zapp_entry.main = function main$() {
    return async.async(dart.void, function* main() {
      yield ui.webOnlyWarmupEngine({runApp: dart.fn(() => {
          $46zapp_entry.runAppGuarded();
        }, T.VoidToNull()), registerPlugins: dart.fn(() => {
          web_plugin_registrant.registerPlugins();
        }, T.VoidToNull())});
    });
  };
  main.MyApp = class MyApp extends framework.StatelessWidget {
    build(context) {
      return new app.MaterialApp.new({debugShowCheckedModeBanner: false, home: new main.MyScreen.new()});
    }
    static ['_#new#tearOff']() {
      return new main.MyApp.new();
    }
  };
  (main.MyApp.new = function() {
    main.MyApp.__proto__.new.call(this);
    ;
  }).prototype = main.MyApp.prototype;
  dart.addTypeTests(main.MyApp);
  dart.addTypeCaches(main.MyApp);
  dart.setMethodSignature(main.MyApp, () => ({
    __proto__: dart.getMethods(main.MyApp.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.MyApp, I[0]);
  main.MyScreen = class MyScreen extends framework.StatefulWidget {
    createState() {
      return new main._MyScreenState.new();
    }
    static ['_#new#tearOff']() {
      return new main.MyScreen.new();
    }
  };
  (main.MyScreen.new = function() {
    main.MyScreen.__proto__.new.call(this);
    ;
  }).prototype = main.MyScreen.prototype;
  dart.addTypeTests(main.MyScreen);
  dart.addTypeCaches(main.MyScreen);
  dart.setMethodSignature(main.MyScreen, () => ({
    __proto__: dart.getMethods(main.MyScreen.__proto__),
    createState: dart.fnType(main._MyScreenState, [])
  }));
  dart.setLibraryUri(main.MyScreen, I[0]);
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var _buildButton = dart.privateName(main, "_buildButton");
  main._MyScreenState = class _MyScreenState extends framework.State$(main.MyScreen) {
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("Общежития КубГАУ"), backgroundColor: colors.Colors.green}), body: new single_child_scroll_view.SingleChildScrollView.new({child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: T.JSArrayOfWidget().of([new image.Image.network("https://i3.photo.2gis.com/images/branch/23/3236962275324211_032f.jpg", {fit: box_fit.BoxFit.cover, width: 1 / 0, height: 200}), new basic.Padding.new({padding: C[1] || CT.C1, child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, children: T.JSArrayOfWidget().of([new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: T.JSArrayOfWidget().of([new text.Text.new("Общежитие №20", {style: new text_style.TextStyle.new({fontSize: 22, fontWeight: ui.FontWeight.bold})}), new text.Text.new("Краснодар, ул. Калинина, 13", {style: new text_style.TextStyle.new({fontSize: 16, color: colors.Colors.grey})})])}), new basic.Row.new({children: T.JSArrayOfWidget().of([new icon_button.IconButton.new({icon: new icon$.Icon.new(this.isFavorite ? icons.Icons.favorite : icons.Icons.favorite_border, {color: colors.Colors.red}), onPressed: dart.fn(() => {
                            this.setState(dart.fn(() => {
                              this.isFavorite = !this.isFavorite;
                              this.favoriteCount = this.favoriteCount + (this.isFavorite ? 1 : -1);
                            }, T.VoidTovoid()));
                          }, T.VoidTovoid())}), new text.Text.new(dart.str(this.favoriteCount), {style: new text_style.TextStyle.new({fontSize: 18})})])})])})}), new basic.Padding.new({padding: C[1] || CT.C1, child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceEvenly, children: T.JSArrayOfWidget().of([this[_buildButton](icons.Icons.call, "Позвонить"), this[_buildButton](icons.Icons.map, "Маршрут"), this[_buildButton](icons.Icons.share, "Поделиться")])})}), new basic.Padding.new({padding: C[1] || CT.C1, child: new text.Text.new("Студенческий городок или так называемый кампус Кубанского ГАУ состоит из двадцати общежитий, в которых проживает более 8000 студентов...", {style: new text_style.TextStyle.new({fontSize: 16})})})])})})});
    }
    [_buildButton](icon, label) {
      return new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, children: T.JSArrayOfWidget().of([new icon$.Icon.new(icon, {color: colors.Colors.green, size: 30}), new basic.SizedBox.new({height: 5}), new text.Text.new(label, {style: new text_style.TextStyle.new({color: colors.Colors.green})})])});
    }
    static ['_#new#tearOff']() {
      return new main._MyScreenState.new();
    }
  };
  (main._MyScreenState.new = function() {
    this.isFavorite = false;
    this.favoriteCount = 0;
    main._MyScreenState.__proto__.new.call(this);
    ;
  }).prototype = main._MyScreenState.prototype;
  dart.addTypeTests(main._MyScreenState);
  dart.addTypeCaches(main._MyScreenState);
  dart.setMethodSignature(main._MyScreenState, () => ({
    __proto__: dart.getMethods(main._MyScreenState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_buildButton]: dart.fnType(framework.Widget, [icon_data.IconData, core.String])
  }));
  dart.setLibraryUri(main._MyScreenState, I[0]);
  dart.setFieldSignature(main._MyScreenState, () => ({
    __proto__: dart.getFields(main._MyScreenState.__proto__),
    isFavorite: dart.fieldType(core.bool),
    favoriteCount: dart.fieldType(core.int)
  }));
  main.main = function main$0() {
    binding.runApp(new main.MyApp.new());
  };
  web_plugin_registrant.registerPlugins = function registerPlugins() {
  };
  dart.trackLibraries("zapp_user_main", {
    "file:///zapp/project/.zapp_entry.dart": $46zapp_entry,
    "file:///zapp/project/lib/main.dart": main,
    "file:///zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart": web_plugin_registrant
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["/zapp/project/.zapp_entry.dart","/zapp/project/lib/main.dart","/zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA2CI,IA1BF,iCAAgB;AACd,UAAoB,6BAGD;AAF8B,QAA9B,AAAkB,6BAElB,eAF2B;;AAEL,QAAF,CAApB;;AAEnB,UAAO,AAAQ,uBAAY;AAKvB,QAJK,AAAqC,qBAA7B,qCAAuB,uBAAW,QAAC;AAG9C,UAFC,AAAQ,sBAAW,2BAA2B,CAC/C;;;wBAIL,SAAC,GAAG;AACL,UAAO,AAAQ,uBAAY;AAIvB,QAHC,AAAQ,sBAAW,wBAAwB,CAC5C,AAAE,CAAD,eACD,AAAW,UAAD;;2DAGM,yCACb,SAAC,MAAM,QAAQ,MAAM;AAC1B,cAAO,AAAQ,uBAAY;AAC4B,YAAlD,AAAQ,sBAAW,wBAAwB,CAAC,IAAI;;;EAI3D;;AAEiB;AAQd,MAPD,MAAS,gCACC;AACS,UAAf;6CAEe;AACmB,UAAjB;;IAGvB;;;UC/C4B;AACxB,YAAO,sDACuB,aACtB;IAEV;;;;;;;;EACF;;;;;;;;;;AAIkC;IAAgB;;;;;;;;EAClD;;;;;;;;;;;;;;UAO4B;AACxB,YAAO,oCACG,+BACC,kBAAK,sCACY,6BAEpB,+DACG,0CACkC,yCAC7B,wBACF,wBAAQ,8EAAoF,4CAAuC,OAEzI,sDAES,sCACgC,+CAC3B,wBACR,0CACyC,yCAC7B,wBACR,kBACE,yBACO,wCAAoB,gBAA2B,wBAExD,kBACE,uCACO,wCAAoB,WAAkB,4BAInD,6BACY,wBACR,sCACQ,mBAAK,kBAAmB,uBAAiB,qCAA+B,gCACnE;AAIP,4BAHF,cAAS;AACiB,8BAAxB,mBAAc;AACsB,8BAApC,qBAAA,AAAc,sBAAG,kBAAa,IAAI,CAAC;;gDAIzC,kBAAqB,SAAd,6BAAuB,wCAAoB,kBAM5D,sDAES,sCACgC,8CAC3B,wBACR,mBAAmB,kBAAM,cACzB,mBAAmB,iBAAK,YACxB,mBAAmB,mBAAO,qBAIhC,sDAES,kBACL,oJACO,wCAAoB;IAOzC;mBAE6B,MAAa;AACxC,YAAO,qCACsB,iCACjB,wBACR,mBAAK,IAAI,UAAgB,2BAAa,MACtC,gCAAiB,KACjB,kBAAK,KAAK,UAAS,qCAAwB;IAGjD;;;;;;IApFK,kBAAa;IACd,qBAAgB;;;EAoFtB;;;;;;;;;;;;;;;AAxGiB,IAAf,eAAO;EACT;;ECGwB","file":"main.js"}');
  // Exports:
  return {
    zapp__project__$46zapp_entry: $46zapp_entry,
    zapp__project__lib__main: main,
    zapp__project__$46dart_tool__dartpad__web_plugin_registrant: web_plugin_registrant
  };
}));

//# sourceMappingURL=main.js.map
