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
