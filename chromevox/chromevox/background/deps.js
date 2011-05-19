// This file was autogenerated by /home/build/nonconf/google3/javascript/closure/bin/build/depswriter.py.
// Please do not edit.
goog.addDependency('../audio/background/chrome_native_tts_engine.js', ['cvox.ChromeVoxChromeNativeTtsEngine'], ['cvox.AbstractTts', 'cvox.ChromeVox']);
goog.addDependency('../audio/background/earcons.js', ['cvox.ChromeVoxEarcons'], ['cvox.AbstractEarcons']);
goog.addDependency('../audio/common/abstract_earcons.js', ['cvox.AbstractEarcons'], ['cvox.AbstractLogger']);
goog.addDependency('../audio/common/abstract_earcons_manager.js', ['cvox.AbstractEarconsManager'], ['cvox.AbstractEarcons']);
goog.addDependency('../audio/common/abstract_tts.js', ['cvox.AbstractTts'], ['cvox.AbstractLogger']);
goog.addDependency('../audio/common/abstract_tts_manager.js', ['cvox.AbstractTtsManager'], ['cvox.AbstractTts']);
goog.addDependency('../audio/common/local_earcons_manager.js', ['cvox.LocalEarconsManager'], ['cvox.AbstractEarconsManager']);
goog.addDependency('../audio/common/local_tts_manager.js', ['cvox.LocalTtsManager'], ['cvox.AbstractTts', 'cvox.AbstractTtsManager']);
goog.addDependency('../audio/common/remote_earcons_manager.js', ['cvox.RemoteEarconsManager'], ['cvox.AbstractEarconsManager', 'cvox.ExtensionBridge']);
goog.addDependency('../audio/common/remote_tts_manager.js', ['cvox.RemoteTtsManager'], ['cvox.AbstractTtsManager']);
goog.addDependency('../build/build_config_chrome.js', ['cvox.BuildConfig'], ['cvox.BuildDefs']);
goog.addDependency('../build/build_defs.js', ['cvox.BuildDefs'], []);
goog.addDependency('../chromevis/injected/lens.js', ['chromevis.ChromeVisLens'], ['cvox.BuildConfig', 'cvox.ExtensionBridge', 'cvox.SelectionUtil']);
goog.addDependency('../chromevox/background/accessibility_api_handler.js', ['cvox.ChromeVoxAccessibilityApiHandler'], ['cvox.AbstractEarcons', 'cvox.AbstractEarconsManager', 'cvox.AbstractTtsManager', 'cvox.ChromeVoxEditableTextBase']);
goog.addDependency('../chromevox/background/background.js', ['cvox.ChromeVoxBackground'], ['cvox.BuildConfig', 'cvox.ChromeVox', 'cvox.ChromeVoxAccessibilityApiHandler', 'cvox.ChromeVoxChromeNativeTtsEngine', 'cvox.ChromeVoxEarcons', 'cvox.ExtensionBridge', 'cvox.LocalEarconsManager', 'cvox.LocalTtsManager']);
goog.addDependency('../chromevox/background/bookmark_manager_ui.js', ['cvox.ChromeVoxBookmarksManager'], ['cvox.ChromeVoxEarcons']);
goog.addDependency('../common/abstract_logger.js', ['cvox.AbstractLogger'], []);
goog.addDependency('../common/aria_util.js', ['cvox.AriaUtil'], []);
goog.addDependency('../common/chromevox.js', ['cvox.ChromeVox'], []);
goog.addDependency('../common/chromevox_json.js', ['cvox.ChromeVoxJSON'], []);
goog.addDependency('../common/custom_walker.js', ['cvox.CustomWalker'], []);
goog.addDependency('../common/dom_util.js', ['cvox.DomUtil'], ['cvox.AriaUtil', 'cvox.XpathUtil']);
goog.addDependency('../common/editable_text.js', ['cvox.ChromeVoxEditableContentEditable', 'cvox.ChromeVoxEditableHTMLInput', 'cvox.ChromeVoxEditableTextArea', 'cvox.ChromeVoxEditableTextBase'], ['cvox.DomUtil']);
goog.addDependency('../common/extension_bridge.js', ['cvox.ExtensionBridge'], ['cvox.BuildConfig', 'cvox.ChromeVoxJSON']);
goog.addDependency('../common/focus_util.js', ['cvox.FocusUtil'], []);
goog.addDependency('../common/interframe.js', ['cvox.Interframe'], ['cvox.ChromeVoxJSON']);
goog.addDependency('../common/key_util.js', ['cvox.KeyUtil'], ['cvox.ChromeVox']);
goog.addDependency('../common/linear_dom_walker.js', ['cvox.LinearDomWalker'], ['cvox.DomUtil', 'cvox.XpathUtil']);
goog.addDependency('../common/selection_util.js', ['cvox.SelectionUtil'], ['cvox.DomUtil', 'cvox.XpathUtil']);
goog.addDependency('../common/selection_walker.js', ['cvox.SelectionWalker'], ['cvox.SelectionUtil', 'cvox.TraverseContent']);
goog.addDependency('../common/smart_dom_walker.js', ['cvox.SmartDomWalker'], ['cvox.DomUtil', 'cvox.LinearDomWalker', 'cvox.TraverseTable', 'cvox.XpathUtil']);
goog.addDependency('../common/table_util.js', ['cvox.TableUtil'], ['cvox.XpathUtil']);
goog.addDependency('../common/traverse_content.js', ['cvox.TraverseContent'], ['cvox.DomUtil', 'cvox.SelectionUtil', 'cvox.TraverseUtil']);
goog.addDependency('../common/traverse_table.js', ['cvox.TraverseTable'], ['cvox.SelectionUtil', 'cvox.TableUtil', 'cvox.TraverseUtil']);
goog.addDependency('../common/traverse_util.js', ['cvox.TraverseUtil'], []);
goog.addDependency('../common/xpath_util.js', ['cvox.XpathUtil'], []);