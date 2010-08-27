safari.extension.settings.addEventListener("change", function (ev) {
    Config.set(ev.key, ev.newValue);

    // �V���[�g�J�b�g�L�[�̕ύX�͊e�E�B���h�E�̊e�^�u�ɒʒm������
    if (/^shortcut\./.test(ev.key)) {
        safari.application.browserWindows.forEach(function (win) {
            win.tabs.forEach(function (tab) {
                tab.page.dispatchMessage("keyboardShortcutChanged", ev);
            });
        });
    }
}, false);
