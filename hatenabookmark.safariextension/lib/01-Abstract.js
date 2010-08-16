var Abstract = {};

Abstract.tabs = {
    // �^�u��V�K�쐬
    create: function (createProperties, callback) {
        var bw  = safari.application.activeBrowserWindow;
        var tab = isNewTab ? bw.openTab() : bw.activeTab;
        tab.url = createProperties.url;

        if (typeof callback === "function")
            callback(tab);

        return tab;
    },

    // �^�u ID ���w�肵�ă^�u���擾
    get: function (tabid, callback) {

    },

    // �I�𒆂̃^�u���擾����
    getSelected: function () {
    },

    onUpdated: function () {
    },

    onSelectionChanged: function () {
    }
};

Abstract.windows = {
    get: function (windowId, callback) {
    },

    // �E�B���h�E�̈ʒu��ύX����
    update: function (windowId, position) {
    },

    getLastFocused: function (callback) {
    }
};

Abstract.self = {
    // injected �X�N���v�g�Ȃǂ���ڑ��v�����������ꍇ, �Ăяo�����.
    // Abstract.self.onConnect.addListener(...)
    onConnect: {
        addListener: function (port, name) {
        }
    }
};

Abstract.extension = {
    // var _port = Abstract.extension.connect();
    // port ��Ԃ�
    connect: function () {
    }
};

