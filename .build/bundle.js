/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./build.definitions/My_App/i18n/i18n.properties":
/*!*******************************************************!*\
  !*** ./build.definitions/My_App/i18n/i18n.properties ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "Customers=Customers\nCustomer_Detail=Customer Detail\nProducts=Products\nProduct_Detail=Product Detail\nPurchaseOrderHeaders=PurchaseOrderHeaders\nPurchaseOrderHeader_Detail=PurchaseOrderHeader Detail\nPurchaseOrderItems=PurchaseOrderItems\nPurchaseOrderItem_Detail=PurchaseOrderItem Detail\nSalesOrderHeaders=SalesOrderHeaders\nSalesOrderHeader_Detail=SalesOrderHeader Detail\nSalesOrderItems=SalesOrderItems\nSalesOrderItem_Detail=SalesOrderItem Detail\nSuppliers=Suppliers\nSupplier_Detail=Supplier Detail"

/***/ }),

/***/ "./build.definitions/application-index.js":
/*!************************************************!*\
  !*** ./build.definitions/application-index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let application_app = __webpack_require__(/*! ./Application.app */ "./build.definitions/Application.app")
let my_app_actions_application_appupdate_action = __webpack_require__(/*! ./My_App/Actions/Application/AppUpdate.action */ "./build.definitions/My_App/Actions/Application/AppUpdate.action")
let my_app_actions_application_appupdatefailuremessage_action = __webpack_require__(/*! ./My_App/Actions/Application/AppUpdateFailureMessage.action */ "./build.definitions/My_App/Actions/Application/AppUpdateFailureMessage.action")
let my_app_actions_application_appupdateprogressbanner_action = __webpack_require__(/*! ./My_App/Actions/Application/AppUpdateProgressBanner.action */ "./build.definitions/My_App/Actions/Application/AppUpdateProgressBanner.action")
let my_app_actions_application_appupdatesuccessmessage_action = __webpack_require__(/*! ./My_App/Actions/Application/AppUpdateSuccessMessage.action */ "./build.definitions/My_App/Actions/Application/AppUpdateSuccessMessage.action")
let my_app_actions_application_logout_action = __webpack_require__(/*! ./My_App/Actions/Application/Logout.action */ "./build.definitions/My_App/Actions/Application/Logout.action")
let my_app_actions_application_navtoabout_action = __webpack_require__(/*! ./My_App/Actions/Application/NavToAbout.action */ "./build.definitions/My_App/Actions/Application/NavToAbout.action")
let my_app_actions_application_navtoactivitylog_action = __webpack_require__(/*! ./My_App/Actions/Application/NavToActivityLog.action */ "./build.definitions/My_App/Actions/Application/NavToActivityLog.action")
let my_app_actions_application_navtosupport_action = __webpack_require__(/*! ./My_App/Actions/Application/NavToSupport.action */ "./build.definitions/My_App/Actions/Application/NavToSupport.action")
let my_app_actions_application_onwillupdate_action = __webpack_require__(/*! ./My_App/Actions/Application/OnWillUpdate.action */ "./build.definitions/My_App/Actions/Application/OnWillUpdate.action")
let my_app_actions_application_reset_action = __webpack_require__(/*! ./My_App/Actions/Application/Reset.action */ "./build.definitions/My_App/Actions/Application/Reset.action")
let my_app_actions_application_resetmessage_action = __webpack_require__(/*! ./My_App/Actions/Application/ResetMessage.action */ "./build.definitions/My_App/Actions/Application/ResetMessage.action")
let my_app_actions_application_usermenupopover_action = __webpack_require__(/*! ./My_App/Actions/Application/UserMenuPopover.action */ "./build.definitions/My_App/Actions/Application/UserMenuPopover.action")
let my_app_actions_closemodalpage_cancel_action = __webpack_require__(/*! ./My_App/Actions/CloseModalPage_Cancel.action */ "./build.definitions/My_App/Actions/CloseModalPage_Cancel.action")
let my_app_actions_closemodalpage_complete_action = __webpack_require__(/*! ./My_App/Actions/CloseModalPage_Complete.action */ "./build.definitions/My_App/Actions/CloseModalPage_Complete.action")
let my_app_actions_closepage_action = __webpack_require__(/*! ./My_App/Actions/ClosePage.action */ "./build.definitions/My_App/Actions/ClosePage.action")
let my_app_actions_com_sap_edm_sampleservice_v4_customers_navtocustomers_detail_action = __webpack_require__(/*! ./My_App/Actions/com_sap_edm_sampleservice_v4/Customers/NavToCustomers_Detail.action */ "./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/Customers/NavToCustomers_Detail.action")
let my_app_actions_com_sap_edm_sampleservice_v4_customers_navtocustomers_list_action = __webpack_require__(/*! ./My_App/Actions/com_sap_edm_sampleservice_v4/Customers/NavToCustomers_List.action */ "./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/Customers/NavToCustomers_List.action")
let my_app_actions_com_sap_edm_sampleservice_v4_products_navtoproducts_detail_action = __webpack_require__(/*! ./My_App/Actions/com_sap_edm_sampleservice_v4/Products/NavToProducts_Detail.action */ "./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/Products/NavToProducts_Detail.action")
let my_app_actions_com_sap_edm_sampleservice_v4_products_navtoproducts_list_action = __webpack_require__(/*! ./My_App/Actions/com_sap_edm_sampleservice_v4/Products/NavToProducts_List.action */ "./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/Products/NavToProducts_List.action")
let my_app_actions_com_sap_edm_sampleservice_v4_purchaseorderheaders_navtopurchaseorderheaders_detail_action = __webpack_require__(/*! ./My_App/Actions/com_sap_edm_sampleservice_v4/PurchaseOrderHeaders/NavToPurchaseOrderHeaders_Detail.action */ "./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/PurchaseOrderHeaders/NavToPurchaseOrderHeaders_Detail.action")
let my_app_actions_com_sap_edm_sampleservice_v4_purchaseorderheaders_navtopurchaseorderheaders_list_action = __webpack_require__(/*! ./My_App/Actions/com_sap_edm_sampleservice_v4/PurchaseOrderHeaders/NavToPurchaseOrderHeaders_List.action */ "./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/PurchaseOrderHeaders/NavToPurchaseOrderHeaders_List.action")
let my_app_actions_com_sap_edm_sampleservice_v4_purchaseorderitems_navtopurchaseorderitems_detail_action = __webpack_require__(/*! ./My_App/Actions/com_sap_edm_sampleservice_v4/PurchaseOrderItems/NavToPurchaseOrderItems_Detail.action */ "./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/PurchaseOrderItems/NavToPurchaseOrderItems_Detail.action")
let my_app_actions_com_sap_edm_sampleservice_v4_purchaseorderitems_navtopurchaseorderitems_list_action = __webpack_require__(/*! ./My_App/Actions/com_sap_edm_sampleservice_v4/PurchaseOrderItems/NavToPurchaseOrderItems_List.action */ "./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/PurchaseOrderItems/NavToPurchaseOrderItems_List.action")
let my_app_actions_com_sap_edm_sampleservice_v4_salesorderheaders_navtosalesorderheaders_detail_action = __webpack_require__(/*! ./My_App/Actions/com_sap_edm_sampleservice_v4/SalesOrderHeaders/NavToSalesOrderHeaders_Detail.action */ "./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/SalesOrderHeaders/NavToSalesOrderHeaders_Detail.action")
let my_app_actions_com_sap_edm_sampleservice_v4_salesorderheaders_navtosalesorderheaders_list_action = __webpack_require__(/*! ./My_App/Actions/com_sap_edm_sampleservice_v4/SalesOrderHeaders/NavToSalesOrderHeaders_List.action */ "./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/SalesOrderHeaders/NavToSalesOrderHeaders_List.action")
let my_app_actions_com_sap_edm_sampleservice_v4_salesorderitems_navtosalesorderitems_detail_action = __webpack_require__(/*! ./My_App/Actions/com_sap_edm_sampleservice_v4/SalesOrderItems/NavToSalesOrderItems_Detail.action */ "./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/SalesOrderItems/NavToSalesOrderItems_Detail.action")
let my_app_actions_com_sap_edm_sampleservice_v4_salesorderitems_navtosalesorderitems_list_action = __webpack_require__(/*! ./My_App/Actions/com_sap_edm_sampleservice_v4/SalesOrderItems/NavToSalesOrderItems_List.action */ "./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/SalesOrderItems/NavToSalesOrderItems_List.action")
let my_app_actions_com_sap_edm_sampleservice_v4_service_closeoffline_action = __webpack_require__(/*! ./My_App/Actions/com_sap_edm_sampleservice_v4/Service/CloseOffline.action */ "./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/Service/CloseOffline.action")
let my_app_actions_com_sap_edm_sampleservice_v4_service_closeofflinefailuremessage_action = __webpack_require__(/*! ./My_App/Actions/com_sap_edm_sampleservice_v4/Service/CloseOfflineFailureMessage.action */ "./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/Service/CloseOfflineFailureMessage.action")
let my_app_actions_com_sap_edm_sampleservice_v4_service_closeofflinesuccessmessage_action = __webpack_require__(/*! ./My_App/Actions/com_sap_edm_sampleservice_v4/Service/CloseOfflineSuccessMessage.action */ "./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/Service/CloseOfflineSuccessMessage.action")
let my_app_actions_com_sap_edm_sampleservice_v4_service_downloadoffline_action = __webpack_require__(/*! ./My_App/Actions/com_sap_edm_sampleservice_v4/Service/DownloadOffline.action */ "./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/Service/DownloadOffline.action")
let my_app_actions_com_sap_edm_sampleservice_v4_service_downloadstartedmessage_action = __webpack_require__(/*! ./My_App/Actions/com_sap_edm_sampleservice_v4/Service/DownloadStartedMessage.action */ "./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/Service/DownloadStartedMessage.action")
let my_app_actions_com_sap_edm_sampleservice_v4_service_initializeoffline_action = __webpack_require__(/*! ./My_App/Actions/com_sap_edm_sampleservice_v4/Service/InitializeOffline.action */ "./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/Service/InitializeOffline.action")
let my_app_actions_com_sap_edm_sampleservice_v4_service_initializeofflinefailuremessage_action = __webpack_require__(/*! ./My_App/Actions/com_sap_edm_sampleservice_v4/Service/InitializeOfflineFailureMessage.action */ "./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/Service/InitializeOfflineFailureMessage.action")
let my_app_actions_com_sap_edm_sampleservice_v4_service_syncfailuremessage_action = __webpack_require__(/*! ./My_App/Actions/com_sap_edm_sampleservice_v4/Service/SyncFailureMessage.action */ "./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/Service/SyncFailureMessage.action")
let my_app_actions_com_sap_edm_sampleservice_v4_service_syncstartedmessage_action = __webpack_require__(/*! ./My_App/Actions/com_sap_edm_sampleservice_v4/Service/SyncStartedMessage.action */ "./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/Service/SyncStartedMessage.action")
let my_app_actions_com_sap_edm_sampleservice_v4_service_uploadoffline_action = __webpack_require__(/*! ./My_App/Actions/com_sap_edm_sampleservice_v4/Service/UploadOffline.action */ "./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/Service/UploadOffline.action")
let my_app_actions_com_sap_edm_sampleservice_v4_suppliers_navtosuppliers_detail_action = __webpack_require__(/*! ./My_App/Actions/com_sap_edm_sampleservice_v4/Suppliers/NavToSuppliers_Detail.action */ "./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/Suppliers/NavToSuppliers_Detail.action")
let my_app_actions_com_sap_edm_sampleservice_v4_suppliers_navtosuppliers_list_action = __webpack_require__(/*! ./My_App/Actions/com_sap_edm_sampleservice_v4/Suppliers/NavToSuppliers_List.action */ "./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/Suppliers/NavToSuppliers_List.action")
let my_app_actions_customer_updateentity_action = __webpack_require__(/*! ./My_App/Actions/Customer_UpdateEntity.action */ "./build.definitions/My_App/Actions/Customer_UpdateEntity.action")
let my_app_actions_errorarchive_errorarchive_syncfailure_action = __webpack_require__(/*! ./My_App/Actions/ErrorArchive/ErrorArchive_SyncFailure.action */ "./build.definitions/My_App/Actions/ErrorArchive/ErrorArchive_SyncFailure.action")
let my_app_actions_errorarchive_navtoerrorarchive_detail_action = __webpack_require__(/*! ./My_App/Actions/ErrorArchive/NavToErrorArchive_Detail.action */ "./build.definitions/My_App/Actions/ErrorArchive/NavToErrorArchive_Detail.action")
let my_app_actions_errorarchive_navtoerrorarchive_list_action = __webpack_require__(/*! ./My_App/Actions/ErrorArchive/NavToErrorArchive_List.action */ "./build.definitions/My_App/Actions/ErrorArchive/NavToErrorArchive_List.action")
let my_app_actions_genericbannermessage_action = __webpack_require__(/*! ./My_App/Actions/GenericBannerMessage.action */ "./build.definitions/My_App/Actions/GenericBannerMessage.action")
let my_app_actions_genericmessagebox_action = __webpack_require__(/*! ./My_App/Actions/GenericMessageBox.action */ "./build.definitions/My_App/Actions/GenericMessageBox.action")
let my_app_actions_genericnavigation_action = __webpack_require__(/*! ./My_App/Actions/GenericNavigation.action */ "./build.definitions/My_App/Actions/GenericNavigation.action")
let my_app_actions_generictoastmessage_action = __webpack_require__(/*! ./My_App/Actions/GenericToastMessage.action */ "./build.definitions/My_App/Actions/GenericToastMessage.action")
let my_app_actions_logging_loguploadfailure_action = __webpack_require__(/*! ./My_App/Actions/Logging/LogUploadFailure.action */ "./build.definitions/My_App/Actions/Logging/LogUploadFailure.action")
let my_app_actions_logging_loguploadsuccessful_action = __webpack_require__(/*! ./My_App/Actions/Logging/LogUploadSuccessful.action */ "./build.definitions/My_App/Actions/Logging/LogUploadSuccessful.action")
let my_app_actions_logging_uploadlog_action = __webpack_require__(/*! ./My_App/Actions/Logging/UploadLog.action */ "./build.definitions/My_App/Actions/Logging/UploadLog.action")
let my_app_actions_logging_uploadlogprogress_action = __webpack_require__(/*! ./My_App/Actions/Logging/UploadLogProgress.action */ "./build.definitions/My_App/Actions/Logging/UploadLogProgress.action")
let my_app_actions_navto_productnav_action = __webpack_require__(/*! ./My_App/Actions/navto_productnav.action */ "./build.definitions/My_App/Actions/navto_productnav.action")
let my_app_actions_navtocustomer_details_action = __webpack_require__(/*! ./My_App/Actions/navToCustomer_Details.action */ "./build.definitions/My_App/Actions/navToCustomer_Details.action")
let my_app_actions_navtocustomer_edit_action = __webpack_require__(/*! ./My_App/Actions/navToCustomer_Edit.action */ "./build.definitions/My_App/Actions/navToCustomer_Edit.action")
let my_app_actions_navtocustomer_list_action = __webpack_require__(/*! ./My_App/Actions/NavToCustomer_List.action */ "./build.definitions/My_App/Actions/NavToCustomer_List.action")
let my_app_actions_updatecustomerentityfailmessage_action = __webpack_require__(/*! ./My_App/Actions/UpdateCustomerEntityFailMessage.action */ "./build.definitions/My_App/Actions/UpdateCustomerEntityFailMessage.action")
let my_app_globals_application_appdefinition_version_global = __webpack_require__(/*! ./My_App/Globals/Application/AppDefinition_Version.global */ "./build.definitions/My_App/Globals/Application/AppDefinition_Version.global")
let my_app_globals_application_applicationname_global = __webpack_require__(/*! ./My_App/Globals/Application/ApplicationName.global */ "./build.definitions/My_App/Globals/Application/ApplicationName.global")
let my_app_globals_application_supportemail_global = __webpack_require__(/*! ./My_App/Globals/Application/SupportEmail.global */ "./build.definitions/My_App/Globals/Application/SupportEmail.global")
let my_app_globals_application_supportphone_global = __webpack_require__(/*! ./My_App/Globals/Application/SupportPhone.global */ "./build.definitions/My_App/Globals/Application/SupportPhone.global")
let my_app_i18n_i18n_properties = __webpack_require__(/*! ./My_App/i18n/i18n.properties */ "./build.definitions/My_App/i18n/i18n.properties")
let my_app_jsconfig_json = __webpack_require__(/*! ./My_App/jsconfig.json */ "./build.definitions/My_App/jsconfig.json")
let my_app_pages_application_about_page = __webpack_require__(/*! ./My_App/Pages/Application/About.page */ "./build.definitions/My_App/Pages/Application/About.page")
let my_app_pages_application_support_page = __webpack_require__(/*! ./My_App/Pages/Application/Support.page */ "./build.definitions/My_App/Pages/Application/Support.page")
let my_app_pages_application_useractivitylog_page = __webpack_require__(/*! ./My_App/Pages/Application/UserActivityLog.page */ "./build.definitions/My_App/Pages/Application/UserActivityLog.page")
let my_app_pages_com_sap_edm_sampleservice_v4_customers_customers_detail_page = __webpack_require__(/*! ./My_App/Pages/com_sap_edm_sampleservice_v4_Customers/Customers_Detail.page */ "./build.definitions/My_App/Pages/com_sap_edm_sampleservice_v4_Customers/Customers_Detail.page")
let my_app_pages_com_sap_edm_sampleservice_v4_customers_customers_list_page = __webpack_require__(/*! ./My_App/Pages/com_sap_edm_sampleservice_v4_Customers/Customers_List.page */ "./build.definitions/My_App/Pages/com_sap_edm_sampleservice_v4_Customers/Customers_List.page")
let my_app_pages_com_sap_edm_sampleservice_v4_products_products_detail_page = __webpack_require__(/*! ./My_App/Pages/com_sap_edm_sampleservice_v4_Products/Products_Detail.page */ "./build.definitions/My_App/Pages/com_sap_edm_sampleservice_v4_Products/Products_Detail.page")
let my_app_pages_com_sap_edm_sampleservice_v4_products_products_list_page = __webpack_require__(/*! ./My_App/Pages/com_sap_edm_sampleservice_v4_Products/Products_List.page */ "./build.definitions/My_App/Pages/com_sap_edm_sampleservice_v4_Products/Products_List.page")
let my_app_pages_com_sap_edm_sampleservice_v4_purchaseorderheaders_purchaseorderheaders_detail_page = __webpack_require__(/*! ./My_App/Pages/com_sap_edm_sampleservice_v4_PurchaseOrderHeaders/PurchaseOrderHeaders_Detail.page */ "./build.definitions/My_App/Pages/com_sap_edm_sampleservice_v4_PurchaseOrderHeaders/PurchaseOrderHeaders_Detail.page")
let my_app_pages_com_sap_edm_sampleservice_v4_purchaseorderheaders_purchaseorderheaders_list_page = __webpack_require__(/*! ./My_App/Pages/com_sap_edm_sampleservice_v4_PurchaseOrderHeaders/PurchaseOrderHeaders_List.page */ "./build.definitions/My_App/Pages/com_sap_edm_sampleservice_v4_PurchaseOrderHeaders/PurchaseOrderHeaders_List.page")
let my_app_pages_com_sap_edm_sampleservice_v4_purchaseorderitems_purchaseorderitems_detail_page = __webpack_require__(/*! ./My_App/Pages/com_sap_edm_sampleservice_v4_PurchaseOrderItems/PurchaseOrderItems_Detail.page */ "./build.definitions/My_App/Pages/com_sap_edm_sampleservice_v4_PurchaseOrderItems/PurchaseOrderItems_Detail.page")
let my_app_pages_com_sap_edm_sampleservice_v4_purchaseorderitems_purchaseorderitems_list_page = __webpack_require__(/*! ./My_App/Pages/com_sap_edm_sampleservice_v4_PurchaseOrderItems/PurchaseOrderItems_List.page */ "./build.definitions/My_App/Pages/com_sap_edm_sampleservice_v4_PurchaseOrderItems/PurchaseOrderItems_List.page")
let my_app_pages_com_sap_edm_sampleservice_v4_salesorderheaders_salesorderheaders_detail_page = __webpack_require__(/*! ./My_App/Pages/com_sap_edm_sampleservice_v4_SalesOrderHeaders/SalesOrderHeaders_Detail.page */ "./build.definitions/My_App/Pages/com_sap_edm_sampleservice_v4_SalesOrderHeaders/SalesOrderHeaders_Detail.page")
let my_app_pages_com_sap_edm_sampleservice_v4_salesorderheaders_salesorderheaders_list_page = __webpack_require__(/*! ./My_App/Pages/com_sap_edm_sampleservice_v4_SalesOrderHeaders/SalesOrderHeaders_List.page */ "./build.definitions/My_App/Pages/com_sap_edm_sampleservice_v4_SalesOrderHeaders/SalesOrderHeaders_List.page")
let my_app_pages_com_sap_edm_sampleservice_v4_salesorderitems_salesorderitems_detail_page = __webpack_require__(/*! ./My_App/Pages/com_sap_edm_sampleservice_v4_SalesOrderItems/SalesOrderItems_Detail.page */ "./build.definitions/My_App/Pages/com_sap_edm_sampleservice_v4_SalesOrderItems/SalesOrderItems_Detail.page")
let my_app_pages_com_sap_edm_sampleservice_v4_salesorderitems_salesorderitems_list_page = __webpack_require__(/*! ./My_App/Pages/com_sap_edm_sampleservice_v4_SalesOrderItems/SalesOrderItems_List.page */ "./build.definitions/My_App/Pages/com_sap_edm_sampleservice_v4_SalesOrderItems/SalesOrderItems_List.page")
let my_app_pages_com_sap_edm_sampleservice_v4_suppliers_suppliers_detail_page = __webpack_require__(/*! ./My_App/Pages/com_sap_edm_sampleservice_v4_Suppliers/Suppliers_Detail.page */ "./build.definitions/My_App/Pages/com_sap_edm_sampleservice_v4_Suppliers/Suppliers_Detail.page")
let my_app_pages_com_sap_edm_sampleservice_v4_suppliers_suppliers_list_page = __webpack_require__(/*! ./My_App/Pages/com_sap_edm_sampleservice_v4_Suppliers/Suppliers_List.page */ "./build.definitions/My_App/Pages/com_sap_edm_sampleservice_v4_Suppliers/Suppliers_List.page")
let my_app_pages_customer_edit_page = __webpack_require__(/*! ./My_App/Pages/Customer_Edit.page */ "./build.definitions/My_App/Pages/Customer_Edit.page")
let my_app_pages_customerlist_page = __webpack_require__(/*! ./My_App/Pages/CustomerList.page */ "./build.definitions/My_App/Pages/CustomerList.page")
let my_app_pages_customers_detail_page = __webpack_require__(/*! ./My_App/Pages/Customers_detail.page */ "./build.definitions/My_App/Pages/Customers_detail.page")
let my_app_pages_errorarchive_errorarchive_detail_page = __webpack_require__(/*! ./My_App/Pages/ErrorArchive/ErrorArchive_Detail.page */ "./build.definitions/My_App/Pages/ErrorArchive/ErrorArchive_Detail.page")
let my_app_pages_errorarchive_errorarchive_list_page = __webpack_require__(/*! ./My_App/Pages/ErrorArchive/ErrorArchive_List.page */ "./build.definitions/My_App/Pages/ErrorArchive/ErrorArchive_List.page")
let my_app_pages_main_page = __webpack_require__(/*! ./My_App/Pages/Main.page */ "./build.definitions/My_App/Pages/Main.page")
let my_app_pages_productnav_page = __webpack_require__(/*! ./My_App/Pages/Productnav.page */ "./build.definitions/My_App/Pages/Productnav.page")
let my_app_rules_application_appupdatefailure_js = __webpack_require__(/*! ./My_App/Rules/Application/AppUpdateFailure.js */ "./build.definitions/My_App/Rules/Application/AppUpdateFailure.js")
let my_app_rules_application_appupdatesuccess_js = __webpack_require__(/*! ./My_App/Rules/Application/AppUpdateSuccess.js */ "./build.definitions/My_App/Rules/Application/AppUpdateSuccess.js")
let my_app_rules_application_clientismultiusermode_js = __webpack_require__(/*! ./My_App/Rules/Application/ClientIsMultiUserMode.js */ "./build.definitions/My_App/Rules/Application/ClientIsMultiUserMode.js")
let my_app_rules_application_getclientsupportversions_js = __webpack_require__(/*! ./My_App/Rules/Application/GetClientSupportVersions.js */ "./build.definitions/My_App/Rules/Application/GetClientSupportVersions.js")
let my_app_rules_application_getclientversion_js = __webpack_require__(/*! ./My_App/Rules/Application/GetClientVersion.js */ "./build.definitions/My_App/Rules/Application/GetClientVersion.js")
let my_app_rules_application_onwillupdate_js = __webpack_require__(/*! ./My_App/Rules/Application/OnWillUpdate.js */ "./build.definitions/My_App/Rules/Application/OnWillUpdate.js")
let my_app_rules_application_resetappsettingsandlogout_js = __webpack_require__(/*! ./My_App/Rules/Application/ResetAppSettingsAndLogout.js */ "./build.definitions/My_App/Rules/Application/ResetAppSettingsAndLogout.js")
let my_app_rules_com_sap_edm_sampleservice_v4_errorarchive_checkforsyncerror_js = __webpack_require__(/*! ./My_App/Rules/com_sap_edm_sampleservice_v4/ErrorArchive_CheckForSyncError.js */ "./build.definitions/My_App/Rules/com_sap_edm_sampleservice_v4/ErrorArchive_CheckForSyncError.js")
let my_app_rules_logging_loglevels_js = __webpack_require__(/*! ./My_App/Rules/Logging/LogLevels.js */ "./build.definitions/My_App/Rules/Logging/LogLevels.js")
let my_app_rules_logging_settracecategories_js = __webpack_require__(/*! ./My_App/Rules/Logging/SetTraceCategories.js */ "./build.definitions/My_App/Rules/Logging/SetTraceCategories.js")
let my_app_rules_logging_setuserloglevel_js = __webpack_require__(/*! ./My_App/Rules/Logging/SetUserLogLevel.js */ "./build.definitions/My_App/Rules/Logging/SetUserLogLevel.js")
let my_app_rules_logging_togglelogging_js = __webpack_require__(/*! ./My_App/Rules/Logging/ToggleLogging.js */ "./build.definitions/My_App/Rules/Logging/ToggleLogging.js")
let my_app_rules_logging_tracecategories_js = __webpack_require__(/*! ./My_App/Rules/Logging/TraceCategories.js */ "./build.definitions/My_App/Rules/Logging/TraceCategories.js")
let my_app_rules_logging_userlogsetting_js = __webpack_require__(/*! ./My_App/Rules/Logging/UserLogSetting.js */ "./build.definitions/My_App/Rules/Logging/UserLogSetting.js")
let my_app_rules_service_initialize_js = __webpack_require__(/*! ./My_App/Rules/Service/Initialize.js */ "./build.definitions/My_App/Rules/Service/Initialize.js")
let my_app_services_com_sap_edm_sampleservice_v4_service = __webpack_require__(/*! ./My_App/Services/com_sap_edm_sampleservice_v4.service */ "./build.definitions/My_App/Services/com_sap_edm_sampleservice_v4.service")
let my_app_styles_styles_css = __webpack_require__(/*! ./My_App/Styles/Styles.css */ "./build.definitions/My_App/Styles/Styles.css")
let my_app_styles_styles_less = __webpack_require__(/*! ./My_App/Styles/Styles.less */ "./build.definitions/My_App/Styles/Styles.less")
let my_app_styles_styles_light_css = __webpack_require__(/*! ./My_App/Styles/Styles.light.css */ "./build.definitions/My_App/Styles/Styles.light.css")
let my_app_styles_styles_light_json = __webpack_require__(/*! ./My_App/Styles/Styles.light.json */ "./build.definitions/My_App/Styles/Styles.light.json")
let my_app_styles_styles_light_nss = __webpack_require__(/*! ./My_App/Styles/Styles.light.nss */ "./build.definitions/My_App/Styles/Styles.light.nss")
let tsconfig_json = __webpack_require__(/*! ./tsconfig.json */ "./build.definitions/tsconfig.json")
let version_mdkbundlerversion = __webpack_require__(/*! ./version.mdkbundlerversion */ "./build.definitions/version.mdkbundlerversion")

module.exports = {
	application_app : application_app,
	my_app_actions_application_appupdate_action : my_app_actions_application_appupdate_action,
	my_app_actions_application_appupdatefailuremessage_action : my_app_actions_application_appupdatefailuremessage_action,
	my_app_actions_application_appupdateprogressbanner_action : my_app_actions_application_appupdateprogressbanner_action,
	my_app_actions_application_appupdatesuccessmessage_action : my_app_actions_application_appupdatesuccessmessage_action,
	my_app_actions_application_logout_action : my_app_actions_application_logout_action,
	my_app_actions_application_navtoabout_action : my_app_actions_application_navtoabout_action,
	my_app_actions_application_navtoactivitylog_action : my_app_actions_application_navtoactivitylog_action,
	my_app_actions_application_navtosupport_action : my_app_actions_application_navtosupport_action,
	my_app_actions_application_onwillupdate_action : my_app_actions_application_onwillupdate_action,
	my_app_actions_application_reset_action : my_app_actions_application_reset_action,
	my_app_actions_application_resetmessage_action : my_app_actions_application_resetmessage_action,
	my_app_actions_application_usermenupopover_action : my_app_actions_application_usermenupopover_action,
	my_app_actions_closemodalpage_cancel_action : my_app_actions_closemodalpage_cancel_action,
	my_app_actions_closemodalpage_complete_action : my_app_actions_closemodalpage_complete_action,
	my_app_actions_closepage_action : my_app_actions_closepage_action,
	my_app_actions_com_sap_edm_sampleservice_v4_customers_navtocustomers_detail_action : my_app_actions_com_sap_edm_sampleservice_v4_customers_navtocustomers_detail_action,
	my_app_actions_com_sap_edm_sampleservice_v4_customers_navtocustomers_list_action : my_app_actions_com_sap_edm_sampleservice_v4_customers_navtocustomers_list_action,
	my_app_actions_com_sap_edm_sampleservice_v4_products_navtoproducts_detail_action : my_app_actions_com_sap_edm_sampleservice_v4_products_navtoproducts_detail_action,
	my_app_actions_com_sap_edm_sampleservice_v4_products_navtoproducts_list_action : my_app_actions_com_sap_edm_sampleservice_v4_products_navtoproducts_list_action,
	my_app_actions_com_sap_edm_sampleservice_v4_purchaseorderheaders_navtopurchaseorderheaders_detail_action : my_app_actions_com_sap_edm_sampleservice_v4_purchaseorderheaders_navtopurchaseorderheaders_detail_action,
	my_app_actions_com_sap_edm_sampleservice_v4_purchaseorderheaders_navtopurchaseorderheaders_list_action : my_app_actions_com_sap_edm_sampleservice_v4_purchaseorderheaders_navtopurchaseorderheaders_list_action,
	my_app_actions_com_sap_edm_sampleservice_v4_purchaseorderitems_navtopurchaseorderitems_detail_action : my_app_actions_com_sap_edm_sampleservice_v4_purchaseorderitems_navtopurchaseorderitems_detail_action,
	my_app_actions_com_sap_edm_sampleservice_v4_purchaseorderitems_navtopurchaseorderitems_list_action : my_app_actions_com_sap_edm_sampleservice_v4_purchaseorderitems_navtopurchaseorderitems_list_action,
	my_app_actions_com_sap_edm_sampleservice_v4_salesorderheaders_navtosalesorderheaders_detail_action : my_app_actions_com_sap_edm_sampleservice_v4_salesorderheaders_navtosalesorderheaders_detail_action,
	my_app_actions_com_sap_edm_sampleservice_v4_salesorderheaders_navtosalesorderheaders_list_action : my_app_actions_com_sap_edm_sampleservice_v4_salesorderheaders_navtosalesorderheaders_list_action,
	my_app_actions_com_sap_edm_sampleservice_v4_salesorderitems_navtosalesorderitems_detail_action : my_app_actions_com_sap_edm_sampleservice_v4_salesorderitems_navtosalesorderitems_detail_action,
	my_app_actions_com_sap_edm_sampleservice_v4_salesorderitems_navtosalesorderitems_list_action : my_app_actions_com_sap_edm_sampleservice_v4_salesorderitems_navtosalesorderitems_list_action,
	my_app_actions_com_sap_edm_sampleservice_v4_service_closeoffline_action : my_app_actions_com_sap_edm_sampleservice_v4_service_closeoffline_action,
	my_app_actions_com_sap_edm_sampleservice_v4_service_closeofflinefailuremessage_action : my_app_actions_com_sap_edm_sampleservice_v4_service_closeofflinefailuremessage_action,
	my_app_actions_com_sap_edm_sampleservice_v4_service_closeofflinesuccessmessage_action : my_app_actions_com_sap_edm_sampleservice_v4_service_closeofflinesuccessmessage_action,
	my_app_actions_com_sap_edm_sampleservice_v4_service_downloadoffline_action : my_app_actions_com_sap_edm_sampleservice_v4_service_downloadoffline_action,
	my_app_actions_com_sap_edm_sampleservice_v4_service_downloadstartedmessage_action : my_app_actions_com_sap_edm_sampleservice_v4_service_downloadstartedmessage_action,
	my_app_actions_com_sap_edm_sampleservice_v4_service_initializeoffline_action : my_app_actions_com_sap_edm_sampleservice_v4_service_initializeoffline_action,
	my_app_actions_com_sap_edm_sampleservice_v4_service_initializeofflinefailuremessage_action : my_app_actions_com_sap_edm_sampleservice_v4_service_initializeofflinefailuremessage_action,
	my_app_actions_com_sap_edm_sampleservice_v4_service_syncfailuremessage_action : my_app_actions_com_sap_edm_sampleservice_v4_service_syncfailuremessage_action,
	my_app_actions_com_sap_edm_sampleservice_v4_service_syncstartedmessage_action : my_app_actions_com_sap_edm_sampleservice_v4_service_syncstartedmessage_action,
	my_app_actions_com_sap_edm_sampleservice_v4_service_uploadoffline_action : my_app_actions_com_sap_edm_sampleservice_v4_service_uploadoffline_action,
	my_app_actions_com_sap_edm_sampleservice_v4_suppliers_navtosuppliers_detail_action : my_app_actions_com_sap_edm_sampleservice_v4_suppliers_navtosuppliers_detail_action,
	my_app_actions_com_sap_edm_sampleservice_v4_suppliers_navtosuppliers_list_action : my_app_actions_com_sap_edm_sampleservice_v4_suppliers_navtosuppliers_list_action,
	my_app_actions_customer_updateentity_action : my_app_actions_customer_updateentity_action,
	my_app_actions_errorarchive_errorarchive_syncfailure_action : my_app_actions_errorarchive_errorarchive_syncfailure_action,
	my_app_actions_errorarchive_navtoerrorarchive_detail_action : my_app_actions_errorarchive_navtoerrorarchive_detail_action,
	my_app_actions_errorarchive_navtoerrorarchive_list_action : my_app_actions_errorarchive_navtoerrorarchive_list_action,
	my_app_actions_genericbannermessage_action : my_app_actions_genericbannermessage_action,
	my_app_actions_genericmessagebox_action : my_app_actions_genericmessagebox_action,
	my_app_actions_genericnavigation_action : my_app_actions_genericnavigation_action,
	my_app_actions_generictoastmessage_action : my_app_actions_generictoastmessage_action,
	my_app_actions_logging_loguploadfailure_action : my_app_actions_logging_loguploadfailure_action,
	my_app_actions_logging_loguploadsuccessful_action : my_app_actions_logging_loguploadsuccessful_action,
	my_app_actions_logging_uploadlog_action : my_app_actions_logging_uploadlog_action,
	my_app_actions_logging_uploadlogprogress_action : my_app_actions_logging_uploadlogprogress_action,
	my_app_actions_navto_productnav_action : my_app_actions_navto_productnav_action,
	my_app_actions_navtocustomer_details_action : my_app_actions_navtocustomer_details_action,
	my_app_actions_navtocustomer_edit_action : my_app_actions_navtocustomer_edit_action,
	my_app_actions_navtocustomer_list_action : my_app_actions_navtocustomer_list_action,
	my_app_actions_updatecustomerentityfailmessage_action : my_app_actions_updatecustomerentityfailmessage_action,
	my_app_globals_application_appdefinition_version_global : my_app_globals_application_appdefinition_version_global,
	my_app_globals_application_applicationname_global : my_app_globals_application_applicationname_global,
	my_app_globals_application_supportemail_global : my_app_globals_application_supportemail_global,
	my_app_globals_application_supportphone_global : my_app_globals_application_supportphone_global,
	my_app_i18n_i18n_properties : my_app_i18n_i18n_properties,
	my_app_jsconfig_json : my_app_jsconfig_json,
	my_app_pages_application_about_page : my_app_pages_application_about_page,
	my_app_pages_application_support_page : my_app_pages_application_support_page,
	my_app_pages_application_useractivitylog_page : my_app_pages_application_useractivitylog_page,
	my_app_pages_com_sap_edm_sampleservice_v4_customers_customers_detail_page : my_app_pages_com_sap_edm_sampleservice_v4_customers_customers_detail_page,
	my_app_pages_com_sap_edm_sampleservice_v4_customers_customers_list_page : my_app_pages_com_sap_edm_sampleservice_v4_customers_customers_list_page,
	my_app_pages_com_sap_edm_sampleservice_v4_products_products_detail_page : my_app_pages_com_sap_edm_sampleservice_v4_products_products_detail_page,
	my_app_pages_com_sap_edm_sampleservice_v4_products_products_list_page : my_app_pages_com_sap_edm_sampleservice_v4_products_products_list_page,
	my_app_pages_com_sap_edm_sampleservice_v4_purchaseorderheaders_purchaseorderheaders_detail_page : my_app_pages_com_sap_edm_sampleservice_v4_purchaseorderheaders_purchaseorderheaders_detail_page,
	my_app_pages_com_sap_edm_sampleservice_v4_purchaseorderheaders_purchaseorderheaders_list_page : my_app_pages_com_sap_edm_sampleservice_v4_purchaseorderheaders_purchaseorderheaders_list_page,
	my_app_pages_com_sap_edm_sampleservice_v4_purchaseorderitems_purchaseorderitems_detail_page : my_app_pages_com_sap_edm_sampleservice_v4_purchaseorderitems_purchaseorderitems_detail_page,
	my_app_pages_com_sap_edm_sampleservice_v4_purchaseorderitems_purchaseorderitems_list_page : my_app_pages_com_sap_edm_sampleservice_v4_purchaseorderitems_purchaseorderitems_list_page,
	my_app_pages_com_sap_edm_sampleservice_v4_salesorderheaders_salesorderheaders_detail_page : my_app_pages_com_sap_edm_sampleservice_v4_salesorderheaders_salesorderheaders_detail_page,
	my_app_pages_com_sap_edm_sampleservice_v4_salesorderheaders_salesorderheaders_list_page : my_app_pages_com_sap_edm_sampleservice_v4_salesorderheaders_salesorderheaders_list_page,
	my_app_pages_com_sap_edm_sampleservice_v4_salesorderitems_salesorderitems_detail_page : my_app_pages_com_sap_edm_sampleservice_v4_salesorderitems_salesorderitems_detail_page,
	my_app_pages_com_sap_edm_sampleservice_v4_salesorderitems_salesorderitems_list_page : my_app_pages_com_sap_edm_sampleservice_v4_salesorderitems_salesorderitems_list_page,
	my_app_pages_com_sap_edm_sampleservice_v4_suppliers_suppliers_detail_page : my_app_pages_com_sap_edm_sampleservice_v4_suppliers_suppliers_detail_page,
	my_app_pages_com_sap_edm_sampleservice_v4_suppliers_suppliers_list_page : my_app_pages_com_sap_edm_sampleservice_v4_suppliers_suppliers_list_page,
	my_app_pages_customer_edit_page : my_app_pages_customer_edit_page,
	my_app_pages_customerlist_page : my_app_pages_customerlist_page,
	my_app_pages_customers_detail_page : my_app_pages_customers_detail_page,
	my_app_pages_errorarchive_errorarchive_detail_page : my_app_pages_errorarchive_errorarchive_detail_page,
	my_app_pages_errorarchive_errorarchive_list_page : my_app_pages_errorarchive_errorarchive_list_page,
	my_app_pages_main_page : my_app_pages_main_page,
	my_app_pages_productnav_page : my_app_pages_productnav_page,
	my_app_rules_application_appupdatefailure_js : my_app_rules_application_appupdatefailure_js,
	my_app_rules_application_appupdatesuccess_js : my_app_rules_application_appupdatesuccess_js,
	my_app_rules_application_clientismultiusermode_js : my_app_rules_application_clientismultiusermode_js,
	my_app_rules_application_getclientsupportversions_js : my_app_rules_application_getclientsupportversions_js,
	my_app_rules_application_getclientversion_js : my_app_rules_application_getclientversion_js,
	my_app_rules_application_onwillupdate_js : my_app_rules_application_onwillupdate_js,
	my_app_rules_application_resetappsettingsandlogout_js : my_app_rules_application_resetappsettingsandlogout_js,
	my_app_rules_com_sap_edm_sampleservice_v4_errorarchive_checkforsyncerror_js : my_app_rules_com_sap_edm_sampleservice_v4_errorarchive_checkforsyncerror_js,
	my_app_rules_logging_loglevels_js : my_app_rules_logging_loglevels_js,
	my_app_rules_logging_settracecategories_js : my_app_rules_logging_settracecategories_js,
	my_app_rules_logging_setuserloglevel_js : my_app_rules_logging_setuserloglevel_js,
	my_app_rules_logging_togglelogging_js : my_app_rules_logging_togglelogging_js,
	my_app_rules_logging_tracecategories_js : my_app_rules_logging_tracecategories_js,
	my_app_rules_logging_userlogsetting_js : my_app_rules_logging_userlogsetting_js,
	my_app_rules_service_initialize_js : my_app_rules_service_initialize_js,
	my_app_services_com_sap_edm_sampleservice_v4_service : my_app_services_com_sap_edm_sampleservice_v4_service,
	my_app_styles_styles_css : my_app_styles_styles_css,
	my_app_styles_styles_less : my_app_styles_styles_less,
	my_app_styles_styles_light_css : my_app_styles_styles_light_css,
	my_app_styles_styles_light_json : my_app_styles_styles_light_json,
	my_app_styles_styles_light_nss : my_app_styles_styles_light_nss,
	tsconfig_json : tsconfig_json,
	version_mdkbundlerversion : version_mdkbundlerversion
}

/***/ }),

/***/ "./build.definitions/My_App/Rules/Application/AppUpdateFailure.js":
/*!************************************************************************!*\
  !*** ./build.definitions/My_App/Rules/Application/AppUpdateFailure.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateFailure)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function AppUpdateFailure(clientAPI) {
  let result = clientAPI.actionResults.AppUpdate.error.toString();
  var message;
  console.log(result);
  if (result.startsWith('Error: Uncaught app extraction failure:')) {
    result = 'Error: Uncaught app extraction failure:';
  }
  if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body: 404 Not Found: Requested route')) {
    result = 'Application instance is not up or running';
  }
  if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body')) {
    result = 'Service instance not found.';
  }
  switch (result) {
    case 'Service instance not found.':
      message = 'Mobile App Update feature is not assigned or not running for your application. Please add the Mobile App Update feature, deploy your application, and try again.';
      break;
    case 'Error: LCMS GET Version Response Error Response Status: 404 | Body: Failed to find a matched endpoint':
      message = 'Mobile App Update feature is not assigned to your application. Please add the Mobile App Update feature, deploy your application, and try again.';
      break;
    case 'Error: LCMS GET Version Response failed: Error: Optional(OAuth2Error.tokenRejected: The newly acquired or refreshed token got rejected.)':
      message = 'The Mobile App Update feature is not assigned to your application or there is no Application metadata deployed. Please check your application in Mobile Services and try again.';
      break;
    case 'Error: Uncaught app extraction failure:':
      message = 'Error extracting metadata. Please redeploy and try again.';
      break;
    case 'Application instance is not up or running':
      message = 'Communication failure. Verify that the BindMobileApplicationRoutesToME Application route is running in your BTP space cockpit.';
      break;
    default:
      message = result;
      break;
  }
  return clientAPI.getPageProxy().executeAction({
    "Name": "/My_App/Actions/Application/AppUpdateFailureMessage.action",
    "Properties": {
      "Duration": 0,
      "Message": message
    }
  });
}

/***/ }),

/***/ "./build.definitions/My_App/Rules/Application/AppUpdateSuccess.js":
/*!************************************************************************!*\
  !*** ./build.definitions/My_App/Rules/Application/AppUpdateSuccess.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateSuccess)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function sleep(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, ms);
  });
}
function AppUpdateSuccess(clientAPI) {
  var message;
  // Force a small pause to let the progress banner show in case there is no new version available
  return sleep(500).then(function () {
    let result = clientAPI.actionResults.AppUpdate.data;
    console.log(result);
    let versionNum = result.split(': ')[1];
    if (result.startsWith('Current version is already up to date')) {
      return clientAPI.getPageProxy().executeAction({
        "Name": "/My_App/Actions/Application/AppUpdateSuccessMessage.action",
        "Properties": {
          "Message": `You are already using the latest version: ${versionNum}`,
          "NumberOfLines": 2
        }
      });
    } else if (result === 'AppUpdate feature is not enabled or no new revision found.') {
      message = 'No Application metadata found. Please deploy your application and try again.';
      return clientAPI.getPageProxy().executeAction({
        "Name": "/My_App/Actions/Application/AppUpdateSuccessMessage.action",
        "Properties": {
          "Duration": 5,
          "Message": message,
          "NumberOfLines": 2
        }
      });
    }
  });
}

/***/ }),

/***/ "./build.definitions/My_App/Rules/Application/ClientIsMultiUserMode.js":
/*!*****************************************************************************!*\
  !*** ./build.definitions/My_App/Rules/Application/ClientIsMultiUserMode.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClientIsMultiUserMode)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ClientIsMultiUserMode(clientAPI) {
  return clientAPI.isAppInMultiUserMode();
}

/***/ }),

/***/ "./build.definitions/My_App/Rules/Application/GetClientSupportVersions.js":
/*!********************************************************************************!*\
  !*** ./build.definitions/My_App/Rules/Application/GetClientSupportVersions.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientSupportVersions)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientSupportVersions(clientAPI) {
  let versionInfo = clientAPI.getVersionInfo();
  let versionStr = '';
  Object.keys(versionInfo).forEach(function (key, index) {
    // key: the name of the object key
    // index: the ordinal position of the key within the object
    //console.log(`Key: ${key}   Index: ${index}`);
    if (key != 'Application Version') {
      versionStr += `${key}: ${versionInfo[key]}\n`;
    }
  });
  return versionStr;
}

/***/ }),

/***/ "./build.definitions/My_App/Rules/Application/GetClientVersion.js":
/*!************************************************************************!*\
  !*** ./build.definitions/My_App/Rules/Application/GetClientVersion.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientVersion)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientVersion(clientAPI) {
  let versionInfo = clientAPI.getVersionInfo();
  if (versionInfo.hasOwnProperty('Application Version')) {
    return versionInfo['Application Version'];
  }
}

/***/ }),

/***/ "./build.definitions/My_App/Rules/Application/OnWillUpdate.js":
/*!********************************************************************!*\
  !*** ./build.definitions/My_App/Rules/Application/OnWillUpdate.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OnWillUpdate)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function OnWillUpdate(clientAPI) {
  return clientAPI.executeAction('/My_App/Actions/Application/OnWillUpdate.action').then(result => {
    if (result.data) {
      return clientAPI.executeAction('/My_App/Actions/com_sap_edm_sampleservice_v4/Service/CloseOffline.action').then(success => Promise.resolve(success), failure => Promise.reject('Offline Odata Close Failed ' + failure));
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ }),

/***/ "./build.definitions/My_App/Rules/Application/ResetAppSettingsAndLogout.js":
/*!*********************************************************************************!*\
  !*** ./build.definitions/My_App/Rules/Application/ResetAppSettingsAndLogout.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetAppSettingsAndLogout)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ResetAppSettingsAndLogout(clientAPI) {
  let logger = clientAPI.getLogger();
  let platform = clientAPI.nativescript.platformModule;
  let appSettings = clientAPI.nativescript.appSettingsModule;
  var appId;
  if (platform && (platform.isIOS || platform.isAndroid)) {
    appId = clientAPI.evaluateTargetPath('#Application/#AppData/MobileServiceAppId');
  } else {
    appId = 'WindowsClient';
  }
  try {
    // Remove any other app specific settings
    appSettings.getAllKeys().forEach(key => {
      if (key.substring(0, appId.length) === appId) {
        appSettings.remove(key);
      }
    });
  } catch (err) {
    logger.log(`ERROR: AppSettings cleanup failure - ${err}`, 'ERROR');
  } finally {
    // Logout 
    return clientAPI.getPageProxy().executeAction('/My_App/Actions/Application/Reset.action');
  }
}

/***/ }),

/***/ "./build.definitions/My_App/Rules/Logging/LogLevels.js":
/*!*************************************************************!*\
  !*** ./build.definitions/My_App/Rules/Logging/LogLevels.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LogLevels)
/* harmony export */ });
function LogLevels(clientAPI) {
  var levels = [];
  levels.push({
    'DisplayValue': 'Error',
    'ReturnValue': 'Error'
  });
  levels.push({
    'DisplayValue': 'Warning',
    'ReturnValue': 'Warn'
  });
  levels.push({
    'DisplayValue': 'Info',
    'ReturnValue': 'Info'
  });
  levels.push({
    'DisplayValue': 'Debug',
    'ReturnValue': 'Debug'
  });
  levels.push({
    'DisplayValue': 'Trace',
    'ReturnValue': 'Trace'
  });
  return levels;
}

/***/ }),

/***/ "./build.definitions/My_App/Rules/Logging/SetTraceCategories.js":
/*!**********************************************************************!*\
  !*** ./build.definitions/My_App/Rules/Logging/SetTraceCategories.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetTraceCategories)
/* harmony export */ });
function SetTraceCategories(clientAPI) {
  var logger = clientAPI.getLogger();
  const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
  const fcsection = sectionedTable.getSection('FormCellSection0');
  const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
  const odataTrace = fcsection.getControl('odataTrace');
  try {
    if (traceCategory.getValue()) {
      var values = traceCategory.getValue();
      var categories = [];
      if (values && values.length) {
        categories = values.map(value => {
          return 'mdk.trace.' + value.ReturnValue;
        });
      }
      clientAPI.setDebugSettings(odataTrace.getValue(), true, categories);
    }
  } catch (exception) {
    logger.log(String(exception), 'Error');
    return undefined;
  }
}

/***/ }),

/***/ "./build.definitions/My_App/Rules/Logging/SetUserLogLevel.js":
/*!*******************************************************************!*\
  !*** ./build.definitions/My_App/Rules/Logging/SetUserLogLevel.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetUserLogLevel)
/* harmony export */ });
function SetUserLogLevel(clientAPI) {
  try {
    if (clientAPI.getValue() && clientAPI.getValue()[0]) {
      var logger = clientAPI.getLogger();
      var listPickerValue = clientAPI.getValue()[0].ReturnValue;
      if (listPickerValue) {
        switch (listPickerValue) {
          case 'Debug':
            logger.setLevel('Debug');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Error':
            logger.setLevel('Error');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Warn':
            logger.setLevel('Warn');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Info':
            logger.setLevel('Info');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Trace':
            logger.setLevel('Trace');
            ShowTraceOptions(clientAPI, true);
            break;
          default:
            // eslint-disable-next-line no-console
            console.log(`unrecognized key ${listPickerValue}`);
        }
        return listPickerValue;
      }
    }
  } catch (exception) {
    logger.log(String(exception), 'Error');
    return undefined;
  }
}
function ShowTraceOptions(clientAPI, tracingEnabled) {
  let categories = clientAPI.getPageProxy().getControl('SectionedTable').getControl('TracingCategoriesListPicker');
  let odataTrace = clientAPI.getPageProxy().getControl('SectionedTable').getControl('odataTrace');
  categories.setVisible(tracingEnabled);
  odataTrace.setVisible(tracingEnabled);
}

/***/ }),

/***/ "./build.definitions/My_App/Rules/Logging/ToggleLogging.js":
/*!*****************************************************************!*\
  !*** ./build.definitions/My_App/Rules/Logging/ToggleLogging.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToggleLogging)
/* harmony export */ });
function ToggleLogging(clientAPI) {
  try {
    var logger = clientAPI.getLogger();
    const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
    const fcsection = sectionedTable.getSection('FormCellSection0');
    const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
    const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
    let switchValue = enableLogSwitch.getValue();
    if (switchValue) {
      logger.on();
      logLevelListPicker.setVisible(true);
      logLevelListPicker.setEditable(true);
      logLevelListPicker.redraw();
    } else {
      logger.off();
      logLevelListPicker.setEditable(false);
      logLevelListPicker.setVisible(false);
      logLevelListPicker.redraw();
    }
    return switchValue;
  } catch (exception) {
    logger.log(String(exception), 'Error');
    return undefined;
  }
}

/***/ }),

/***/ "./build.definitions/My_App/Rules/Logging/TraceCategories.js":
/*!*******************************************************************!*\
  !*** ./build.definitions/My_App/Rules/Logging/TraceCategories.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TraceCategories)
/* harmony export */ });
function TraceCategories(clientAPI) {
  var categories = ['action', 'api', 'app', 'binding', 'branding', 'core', 'i18n', 'lcms', 'logging', 'odata', 'onboarding', 'profiling', 'push', 'restservice', 'settings', 'targetpath', 'ui'];
  var values = [];
  categories.forEach(category => {
    values.push({
      'DisplayValue': category,
      'ReturnValue': category
    });
  });
  return values;
}

/***/ }),

/***/ "./build.definitions/My_App/Rules/Logging/UserLogSetting.js":
/*!******************************************************************!*\
  !*** ./build.definitions/My_App/Rules/Logging/UserLogSetting.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserLogSetting)
/* harmony export */ });
function UserLogSetting(clientAPI) {
  try {
    var logger = clientAPI.getLogger();
    const sectionedTable = clientAPI.getControl('SectionedTable');
    const fcsection = sectionedTable.getSection('FormCellSection0');
    const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
    const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
    const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
    const odataTrace = fcsection.getControl('odataTrace');

    //Persist the user logging preferences
    if (logger) {
      console.log("in logger state");
      if (logger.isTurnedOn()) {
        if (enableLogSwitch) {
          enableLogSwitch.setValue(true);
        }
        if (logLevelListPicker) {
          logLevelListPicker.setEditable(true);
        }
      } else {
        if (enableLogSwitch) {
          enableLogSwitch.setValue(false);
        }
        if (logLevelListPicker) {
          logLevelListPicker.setEditable(false);
        }
      }
      var logLevel = logger.getLevel();
      if (logLevel) {
        if (logLevelListPicker) {
          logLevelListPicker.setValue([logLevel]);
        }
      }
      if (logLevel === 'Trace') {
        traceCategory.setVisible(true);
        odataTrace.setVisible(true);
      }

      //Upon selecting a value in the List picker and clicking the back button 
      //will enable the onload page rule. This will set the selected value
      //in the control
      if (logLevelListPicker.getValue()[0]) {
        var returnValue = logLevelListPicker.getValue()[0].ReturnValue;
        if (returnValue) {
          logLevelListPicker.setValue([returnValue]);
          logger.setLevel(returnValue);
        }
      }
    }
  } catch (exception) {
    // eslint-disable-next-line no-console
    console.log(String(exception), 'Error User Logger could not be set');
  }
}

/***/ }),

/***/ "./build.definitions/My_App/Rules/Service/Initialize.js":
/*!**************************************************************!*\
  !*** ./build.definitions/My_App/Rules/Service/Initialize.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Initialize)
/* harmony export */ });
function Initialize(context) {
  // Perform pre data initialization task

  // Initialize all your Data sources
  let _com_sap_edm_sampleservice_v4 = context.executeAction('/My_App/Actions/com_sap_edm_sampleservice_v4/Service/InitializeOffline.action');

  //You can add more service initialize actions here

  return Promise.all([_com_sap_edm_sampleservice_v4]).then(() => {
    // After Initializing the DB connections

    // Display successful initialization  message to the user
    return context.executeAction({
      "Name": "/My_App/Actions/GenericToastMessage.action",
      "Properties": {
        "Message": "Application Services Initialized",
        "Animated": true,
        "Duration": 1,
        "IsIconHidden": true,
        "NumberOfLines": 1
      }
    });
  }).catch(() => {
    return false;
  });
}

/***/ }),

/***/ "./build.definitions/My_App/Rules/com_sap_edm_sampleservice_v4/ErrorArchive_CheckForSyncError.js":
/*!*******************************************************************************************************!*\
  !*** ./build.definitions/My_App/Rules/com_sap_edm_sampleservice_v4/ErrorArchive_CheckForSyncError.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CheckForSyncError)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} context
 */
function CheckForSyncError(context) {
  context.count('/My_App/Services/com_sap_edm_sampleservice_v4.service', 'ErrorArchive', '').then(errorCount => {
    if (errorCount > 0) {
      return context.getPageProxy().executeAction('/My_App/Actions/ErrorArchive/ErrorArchive_SyncFailure.action').then(function () {
        return Promise.reject(false);
      });
    }
  });
}

/***/ }),

/***/ "./build.definitions/My_App/Styles/Styles.css":
/*!****************************************************!*\
  !*** ./build.definitions/My_App/Styles/Styles.css ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/noSourceMaps.js */ "../../../../css-loader/dist/runtime/noSourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
Page

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/
`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/My_App/Styles/Styles.less":
/*!*****************************************************!*\
  !*** ./build.definitions/My_App/Styles/Styles.less ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/noSourceMaps.js */ "../../../../css-loader/dist/runtime/noSourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
Page

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/My_App/Styles/Styles.light.css":
/*!**********************************************************!*\
  !*** ./build.definitions/My_App/Styles/Styles.light.css ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/noSourceMaps.js */ "../../../../css-loader/dist/runtime/noSourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/My_App/Styles/Styles.light.nss":
/*!**********************************************************!*\
  !*** ./build.definitions/My_App/Styles/Styles.light.nss ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/noSourceMaps.js */ "../../../../css-loader/dist/runtime/noSourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "../../../../css-loader/dist/runtime/api.js":
/*!**************************************************!*\
  !*** ../../../../css-loader/dist/runtime/api.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../../../../css-loader/dist/runtime/noSourceMaps.js":
/*!***********************************************************!*\
  !*** ../../../../css-loader/dist/runtime/noSourceMaps.js ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "./build.definitions/My_App/Pages/Application/About.page":
/*!***************************************************************!*\
  !*** ./build.definitions/My_App/Pages/Application/About.page ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"KeyAndValues":[{"_Name":"KeyValue0","KeyName":"User ID","Value":"#Application/#AppData/UserId","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"#Application/#AppData/DeviceId","_Name":"KeyValue1","KeyName":"Device ID","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"/My_App/Globals/Application/ApplicationName.global","_Name":"KeyValue2","KeyName":"Application","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"/My_App/Globals/Application/AppDefinition_Version.global","_Name":"KeyValue3","KeyName":"Application Metadata Version","Visible":true,"_Type":"KeyValue.Type.Item"}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}},{"KeyAndValues":[{"Value":"/My_App/Rules/Application/GetClientVersion.js","_Name":"KeyValue4","KeyName":"Client Version","Visible":"$(PLT,true,true,false)","_Type":"KeyValue.Type.Item"},{"Value":"/My_App/Rules/Application/GetClientSupportVersions.js","_Name":"KeyValue5","KeyName":"Client Support Versions","Visible":true,"_Type":"KeyValue.Type.Item"}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue1","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}}]}],"_Type":"Page","_Name":"About","ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/My_App/Actions/CloseModalPage_Complete.action","_Type":"Control.Type.ActionBarItem"}],"_Name":"ActionBar1","Caption":"About","PrefersLargeCaption":true,"_Type":"Control.Type.ActionBar"}}

/***/ }),

/***/ "./build.definitions/My_App/Pages/Application/Support.page":
/*!*****************************************************************!*\
  !*** ./build.definitions/My_App/Pages/Application/Support.page ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ContactCell","_Name":"SectionContactCellTable1","EmptySection":{"FooterVisible":false},"ContactCells":[{"ContactCell":{"_Name":"ContactCellItem0","Headline":"Contact Support","ActivityItems":[{"ActivityType":"Phone","ActivityValue":"/My_App/Globals/Application/SupportPhone.global"},{"ActivityType":"Email","ActivityValue":"/My_App/Globals/Application/SupportEmail.global"},{"ActivityType":"Message","ActivityValue":"/My_App/Globals/Application/SupportPhone.global"}]}}]},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":false,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.SimplePropertyCollection","_Name":"SectionSimplePropertyCollection0","Visible":"$(PLT,true,true,false)","EmptySection":{"FooterVisible":false},"SimplePropertyCells":[{"SimplePropertyCell":{"_Name":"SectionSimplePropertyCell0","KeyName":"Activity Log","AccessoryType":"DisclosureIndicator","Visible":"$(PLT,true,true,false)","OnPress":"/My_App/Actions/Application/NavToActivityLog.action","_Type":"SimplePropertyCollection.Type.Cell"}}],"Layout":{"NumberOfColumns":1,"MinimumInteritemSpacing":66}}]}],"_Type":"Page","_Name":"Settings","ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/My_App/Actions/CloseModalPage_Complete.action","_Type":"Control.Type.ActionBarItem"}],"_Name":"ActionBar1","Caption":"Settings","PrefersLargeCaption":false,"_Type":"Control.Type.ActionBar"}}

/***/ }),

/***/ "./build.definitions/My_App/Pages/Application/UserActivityLog.page":
/*!*************************************************************************!*\
  !*** ./build.definitions/My_App/Pages/Application/UserActivityLog.page ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"Controls":[{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"EnableLogSwitch","IsVisible":true,"Separator":true,"Caption":"Enable Logging","OnValueChange":"/My_App/Rules/Logging/ToggleLogging.js","IsEditable":true},{"IsSearchEnabled":false,"_Type":"Control.Type.FormCell.ListPicker","_Name":"LogLevelListPicker","IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Log Level","OnValueChange":"/My_App/Rules/Logging/SetUserLogLevel.js","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"AllowDefaultValueIfOneItem":false,"IsEditable":false,"PickerItems":"/My_App/Rules/Logging/LogLevels.js"},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"TracingCategoriesListPicker","IsVisible":false,"Separator":true,"AllowMultipleSelection":true,"AllowEmptySelection":true,"Caption":"Tracing Categories","PickerPrompt":"Select Categories for Tracing","OnValueChange":"/My_App/Rules/Logging/SetTraceCategories.js","IsSelectedSectionEnabled":true,"IsPickerDismissedOnSelection":false,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"IsEditable":true,"PickerItems":"/My_App/Rules/Logging/TraceCategories.js"},{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"odataTrace","IsVisible":false,"Separator":true,"Caption":"OData Tracing","OnValueChange":"/My_App/Rules/Logging/SetTraceCategories.js","IsEditable":true}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection0"},{"Controls":[{"_Type":"Control.Type.FormCell.Button","_Name":"Send","IsVisible":true,"Separator":true,"Title":"Send Activity Log","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","Enabled":true,"OnPress":"/My_App/Actions/Logging/UploadLogProgress.action"}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection1"}]}],"_Type":"Page","_Name":"UserActivityLog","ActionBar":{"Caption":"Activity Log","PrefersLargeCaption":false,"_Type":"Control.Type.ActionBar"},"OnLoaded":"/My_App/Rules/Logging/UserLogSetting.js"}

/***/ }),

/***/ "./build.definitions/My_App/Pages/CustomerList.page":
/*!**********************************************************!*\
  !*** ./build.definitions/My_App/Pages/CustomerList.page ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ContactCell","Target":{"Service":"/My_App/Services/com_sap_edm_sampleservice_v4.service","EntitySet":"Customers"},"_Name":"SectionContactCell0","Visible":true,"EmptySection":{"FooterVisible":false},"ContactCell":{"Visible":true,"DetailImage":"","Headline":"{FirstName}","Subheadline":"{LastName}","Description":"{City}","OnPress":"/My_App/Actions/navToCustomer_Details.action","ActivityItems":[{"_Name":"SectionContactCell0ActivityItems0","ActivityType":"Phone","ActivityValue":"{PhoneNumber}"},{"_Name":"SectionContactCell0ActivityItems1","ActivityType":"Email","ActivityValue":"{EmailAddress}"}],"ContextMenu":{"PerformFirstActionWithFullSwipe":true}},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"Search":{"Enabled":true,"BarcodeScanner":true}}]}],"_Type":"Page","_Name":"CustomerList","ActionBar":{"Items":[{"_Type":"Control.Type.ActionBarItem","_Name":"ActionBarItem0","Caption":"Create","SystemItem":"Add","Position":"Right","IsIconCircular":false,"Visible":true}],"_Name":"ActionBar1","_Type":"Control.Type.ActionBar","Caption":"Customer","PrefersLargeCaption":true}}

/***/ }),

/***/ "./build.definitions/My_App/Pages/Customer_Edit.page":
/*!***********************************************************!*\
  !*** ./build.definitions/My_App/Pages/Customer_Edit.page ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Visible":true,"EmptySection":{"FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Controls":[{"Value":"{FirstName}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCFirstName","RequiredIndicator":false,"IsVisible":true,"Separator":true,"Caption":"First Name","PlaceHolder":"First name","Enabled":true,"IsEditable":true},{"Value":"{LastName}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCLastName","RequiredIndicator":false,"IsVisible":true,"Separator":true,"Caption":"Last Name","PlaceHolder":"Last Name","Enabled":true,"IsEditable":true},{"Value":"{PhoneNumber}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCPhone","RequiredIndicator":false,"IsVisible":true,"Separator":true,"Caption":"Phone","PlaceHolder":"Phone Number","KeyboardType":"Phone","Enabled":true,"IsEditable":true},{"Value":"{EmailAddress}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCEmail","RequiredIndicator":false,"IsVisible":true,"Separator":true,"Caption":"Email","PlaceHolder":"Email","KeyboardType":"Email","Enabled":true,"IsEditable":true}],"Layout":{"NumberOfColumns":1}}],"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"}}],"_Type":"Page","_Name":"Customer_Edit","ActionBar":{"Items":[{"_Type":"Control.Type.ActionBarItem","_Name":"ActionBarItem0","Caption":"Item","SystemItem":"Cancel","Position":"Left","IsIconCircular":false,"Visible":true,"OnPress":"/My_App/Actions/CloseModalPage_Cancel.action"},{"_Type":"Control.Type.ActionBarItem","_Name":"ActionBarItem1","Caption":"Item","SystemItem":"Save","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/My_App/Actions/Customer_UpdateEntity.action"}],"_Name":"ActionBar0","_Type":"Control.Type.ActionBar","Caption":"Update Customer: {CustomerID}"}}

/***/ }),

/***/ "./build.definitions/My_App/Pages/Customers_detail.page":
/*!**************************************************************!*\
  !*** ./build.definitions/My_App/Pages/Customers_detail.page ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ObjectHeader","_Name":"SectionObjectHeader0","ObjectHeader":{"Subhead":"{LastName}","Footnote":"{EmailAddress}","Description":"{CustomerID}","StatusText":"{PhoneNumber}","DetailImage":"sap-icon://customer","DetailImageIsCircular":false,"BodyText":"{DateOfBirth}","HeadlineText":"{FirstName}","StatusPosition":"Stacked","StatusImagePosition":"Leading","SubstatusImagePosition":"Leading"},"Visible":true},{"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"KeyAndValues":[{"Value":"{HouseNumber} {Street} ","_Type":"KeyValue.Type.Item","_Name":"KeyValue1","KeyName":"Address","Visible":true},{"Value":"{City}","_Type":"KeyValue.Type.Item","_Name":"KeyValue0","KeyName":"City","Visible":true},{"Value":"{PostalCode}","_Type":"KeyValue.Type.Item","_Name":"KeyValue2","KeyName":"PostalCode","Visible":true},{"Value":"{Country}","_Type":"KeyValue.Type.Item","_Name":"KeyValue3","KeyName":"Country","Visible":true}],"MaxItemCount":1,"Layout":{"NumberOfColumns":2}}],"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"}}],"_Type":"Page","_Name":"Customers_detail","ActionBar":{"Items":[{"_Type":"Control.Type.ActionBarItem","_Name":"ActionBarItem0","Caption":"Item","SystemItem":"Edit","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/My_App/Actions/navToCustomer_Edit.action"}],"_Name":"ActionBar0","_Type":"Control.Type.ActionBar","Caption":"Details"},"DesignTimeTarget":{"Service":"/My_App/Services/com_sap_edm_sampleservice_v4.service","EntitySet":"Customers"}}

/***/ }),

/***/ "./build.definitions/My_App/Pages/ErrorArchive/ErrorArchive_Detail.page":
/*!******************************************************************************!*\
  !*** ./build.definitions/My_App/Pages/ErrorArchive/ErrorArchive_Detail.page ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"KeyAndValues":[{"Value":"{Message}","_Name":"KeyValue0","KeyName":"Error","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"{RequestBody}","_Name":"KeyValue1","KeyName":"Request Body","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"{RequestURL}","_Name":"KeyValue2","KeyName":"Request URL","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"{HTTPStatusCode}","_Name":"KeyValue3","KeyName":"HTTP Status Code","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"{RequestMethod}","_Name":"KeyValue4","KeyName":"Request Method","Visible":true,"_Type":"KeyValue.Type.Item"}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}}]}],"_Type":"Page","_Name":"ErrorArchive_Detail","ActionBar":{"Caption":"Details","PrefersLargeCaption":true,"_Type":"Control.Type.ActionBar"}}

/***/ }),

/***/ "./build.definitions/My_App/Pages/ErrorArchive/ErrorArchive_List.page":
/*!****************************************************************************!*\
  !*** ./build.definitions/My_App/Pages/ErrorArchive/ErrorArchive_List.page ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ObjectTable","Target":{"Service":"/My_App/Services/com_sap_edm_sampleservice_v4.service","EntitySet":"ErrorArchive"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"FooterVisible":false,"Caption":"No record found!"},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true,"_Type":"ObjectCell.Type.ContextMenu"},"Title":"{HTTPStatusCode}","Subhead":"{RequestURL}","Footnote":"{Message}","StatusText":"{RequestMethod}","AvatarStack":{"ImageIsCircular":false},"PreserveIconStackSpacing":false,"AccessoryType":"None","OnPress":"/My_App/Actions/ErrorArchive/NavToErrorArchive_Detail.action","Selected":false,"_Type":"ObjectTable.Type.ObjectCell"},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}]}],"_Type":"Page","_Name":"ErrorArchive_List","ActionBar":{"Caption":"Error List","PrefersLargeCaption":true,"_Type":"Control.Type.ActionBar"}}

/***/ }),

/***/ "./build.definitions/My_App/Pages/Main.page":
/*!**************************************************!*\
  !*** ./build.definitions/My_App/Pages/Main.page ***!
  \**************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Layout":{"LayoutType":"Vertical","HorizontalAlignment":"Leading"},"_Type":"Section.Type.ButtonTable","_Name":"SectionButtonTable_com_sap_edm_sampleservice_v4","Header":{"_Type":"SectionCommon.Type.Header","_Name":"SectionHeader_com_sap_edm_sampleservice_v4","AccessoryType":"None","UseTopPadding":true,"Caption":"Test App"},"Visible":true,"EmptySection":{"FooterVisible":false},"Buttons":[{"_Type":"ButtonTable.Type.Button","_Name":"ButtonTableTypeButton0","Title":"Customers","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/My_App/Actions/com_sap_edm_sampleservice_v4/Customers/NavToCustomers_List.action"},{"_Type":"ButtonTable.Type.Button","_Name":"ButtonTableTypeButton1","Title":"Products","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/My_App/Actions/com_sap_edm_sampleservice_v4/Products/NavToProducts_List.action"},{"_Type":"ButtonTable.Type.Button","_Name":"ButtonTableTypeButton2","Title":"PurchaseOrderHeaders","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/My_App/Actions/com_sap_edm_sampleservice_v4/PurchaseOrderHeaders/NavToPurchaseOrderHeaders_List.action"},{"_Type":"ButtonTable.Type.Button","_Name":"ButtonTableTypeButton3","Title":"PurchaseOrderItems","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/My_App/Actions/com_sap_edm_sampleservice_v4/PurchaseOrderItems/NavToPurchaseOrderItems_List.action"},{"_Type":"ButtonTable.Type.Button","_Name":"ButtonTableTypeButton4","Title":"SalesOrderHeaders","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/My_App/Actions/com_sap_edm_sampleservice_v4/SalesOrderHeaders/NavToSalesOrderHeaders_List.action"},{"_Type":"ButtonTable.Type.Button","_Name":"ButtonTableTypeButton5","Title":"SalesOrderItems","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/My_App/Actions/com_sap_edm_sampleservice_v4/SalesOrderItems/NavToSalesOrderItems_List.action"},{"_Type":"ButtonTable.Type.Button","_Name":"ButtonTableTypeButton6","Title":"Suppliers","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/My_App/Actions/com_sap_edm_sampleservice_v4/Suppliers/NavToSuppliers_List.action"},{"_Type":"ButtonTable.Type.Button","_Name":"ButtonTableTypeButton7","Title":"Cutomers","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"sap-icon://customer","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/My_App/Actions/NavToCustomer_List.action"}]},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Layout":{"LayoutType":"Vertical","HorizontalAlignment":"Leading"},"_Type":"Section.Type.ButtonTable","_Name":"SectionButtonTable1","Visible":true,"EmptySection":{"FooterVisible":false},"Buttons":[{"_Type":"ButtonTable.Type.Button","_Name":"ButtonTableTypeButton8","Title":"Products","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"sap-icon://product","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/My_App/Actions/navto_productnav.action"}]},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Layout":{"LayoutType":"Vertical","HorizontalAlignment":"Leading"},"_Type":"Section.Type.ButtonTable","_Name":"SectionButtonTable2","Visible":true,"EmptySection":{"FooterVisible":false},"Buttons":[]}]}],"_Type":"Page","_Name":"Main","ActionBar":{"Items":[{"_Type":"Control.Type.ActionBarItem","_Name":"ActionBarItem0","Caption":"User Menu","Icon":"sap-icon://customer","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/My_App/Actions/Application/UserMenuPopover.action"}],"_Name":"ActionBar1","_Type":"Control.Type.ActionBar","Caption":"Main","PrefersLargeCaption":true}}

/***/ }),

/***/ "./build.definitions/My_App/Pages/Productnav.page":
/*!********************************************************!*\
  !*** ./build.definitions/My_App/Pages/Productnav.page ***!
  \********************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ObjectTable","Target":{"Service":"/My_App/Services/com_sap_edm_sampleservice_v4.service","EntitySet":"Products"},"_Name":"SectionObjectTable1","Visible":true,"EmptySection":{"Caption":"No record ","FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"ObjectCell":{"Title":"{Name}","Subhead":"{Category}","Footnote":"{CurrencyCode}","Description":"{CategoryName}","StatusText":"{DimensionDepth}","SubstatusText":"{DimensionHeight}","PreserveIconStackSpacing":true,"AccessoryType":"None","ProgressIndicator":"InProgress","Tags":[],"AvatarStack":{"Avatars":[],"ImageIsCircular":false,"ImageHasBorder":false},"AvatarGrid":{"Avatars":[],"ImageIsCircular":true},"_Type":"ObjectTable.Type.ObjectCell","Selected":false,"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true,"LeadingItems":[],"TrailingItems":[],"_Type":"ObjectCell.Type.ContextMenu"}},"Search":{"Enabled":true,"Placeholder":"Search Product","BarcodeScanner":true,"Delay":500},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Please wait....","PageSize":50},"Grouping":{"GroupingProperties":[],"Header":{"Items":[]}},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}]}],"_Type":"Page","_Name":"Productnav","ActionBar":{"Items":[],"_Name":"ActionBar2","_Type":"Control.Type.ActionBar"}}

/***/ }),

/***/ "./build.definitions/My_App/Pages/com_sap_edm_sampleservice_v4_Customers/Customers_Detail.page":
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/My_App/Pages/com_sap_edm_sampleservice_v4_Customers/Customers_Detail.page ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/My_App/Services/com_sap_edm_sampleservice_v4.service","EntitySet":"Customers","QueryOptions":""},"ActionBar":{"Items":[],"Caption":"$(L,Customer_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{FirstName}","Subhead":"{City}","BodyText":"","Footnote":"{CustomerID}","Description":"{Country}","StatusText":"{DateOfBirth}","StatusImage":"","SubstatusImage":"","SubstatusText":"{EmailAddress}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"City","Value":"{City}","_Type":"KeyValue.Type.Item"},{"KeyName":"Country","Value":"{Country}","_Type":"KeyValue.Type.Item"},{"KeyName":"CustomerID","Value":"{CustomerID}","_Type":"KeyValue.Type.Item"},{"KeyName":"DateOfBirth","Value":"{DateOfBirth}","_Type":"KeyValue.Type.Item"},{"KeyName":"EmailAddress","Value":"{EmailAddress}","_Type":"KeyValue.Type.Item"},{"KeyName":"FirstName","Value":"{FirstName}","_Type":"KeyValue.Type.Item"},{"KeyName":"HouseNumber","Value":"{HouseNumber}","_Type":"KeyValue.Type.Item"},{"KeyName":"LastName","Value":"{LastName}","_Type":"KeyValue.Type.Item"},{"KeyName":"PhoneNumber","Value":"{PhoneNumber}","_Type":"KeyValue.Type.Item"},{"KeyName":"PostalCode","Value":"{PostalCode}","_Type":"KeyValue.Type.Item"},{"KeyName":"Street","Value":"{Street}","_Type":"KeyValue.Type.Item"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"},{"Header":{"Caption":"Address","_Type":"SectionCommon.Type.Header"},"KeyAndValues":[{"KeyName":"HouseNumber","Value":"{Address/HouseNumber}","_Type":"KeyValue.Type.Item"},{"KeyName":"Street","Value":"{Address/Street}","_Type":"KeyValue.Type.Item"},{"KeyName":"City","Value":"{Address/City}","_Type":"KeyValue.Type.Item"},{"KeyName":"Country","Value":"{Address/Country}","_Type":"KeyValue.Type.Item"},{"KeyName":"PostalCode","Value":"{Address/PostalCode}","_Type":"KeyValue.Type.Item"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValueAddress","_Type":"Section.Type.KeyValue"},{"Header":{"Caption":"SalesOrders","_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{CurrencyCode}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{LifeCycleStatusName}","Footnote":"{CustomerID}","PreserveIconStackSpacing":false,"StatusText":"{GrossAmount}","Subhead":"{CreatedAt}","SubstatusText":"{LifeCycleStatus}","OnPress":"/My_App/Actions/com_sap_edm_sampleservice_v4/SalesOrderHeaders/NavToSalesOrderHeaders_Detail.action","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/SalesOrders","Service":"/My_App/Services/com_sap_edm_sampleservice_v4.service"},"_Type":"Section.Type.ObjectTable"}],"DataSubscriptions":["SalesOrderHeaders"],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Customers_Detail"}

/***/ }),

/***/ "./build.definitions/My_App/Pages/com_sap_edm_sampleservice_v4_Customers/Customers_List.page":
/*!***************************************************************************************************!*\
  !*** ./build.definitions/My_App/Pages/com_sap_edm_sampleservice_v4_Customers/Customers_List.page ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[],"Caption":"$(L,Customers)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{Country}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/My_App/Actions/com_sap_edm_sampleservice_v4/Customers/NavToCustomers_Detail.action","StatusImage":"","Title":"{FirstName}","Footnote":"{CustomerID}","PreserveIconStackSpacing":false,"StatusText":"{DateOfBirth}","Subhead":"{City}","SubstatusText":"{EmailAddress}","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Customers","Service":"/My_App/Services/com_sap_edm_sampleservice_v4.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Customers_List"}

/***/ }),

/***/ "./build.definitions/My_App/Pages/com_sap_edm_sampleservice_v4_Products/Products_Detail.page":
/*!***************************************************************************************************!*\
  !*** ./build.definitions/My_App/Pages/com_sap_edm_sampleservice_v4_Products/Products_Detail.page ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/My_App/Services/com_sap_edm_sampleservice_v4.service","EntitySet":"Products","QueryOptions":""},"ActionBar":{"Items":[],"Caption":"$(L,Product_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"/My_App/Services/com_sap_edm_sampleservice_v4.service/{@odata.readLink}/Picture","HeadlineText":"{Name}","Subhead":"{Category}","BodyText":"","Footnote":"{CurrencyCode}","Description":"{CategoryName}","StatusText":"{DimensionDepth}","StatusImage":"","SubstatusImage":"","SubstatusText":"{DimensionHeight}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"Category","Value":"{Category}","_Type":"KeyValue.Type.Item"},{"KeyName":"CategoryName","Value":"{CategoryName}","_Type":"KeyValue.Type.Item"},{"KeyName":"CurrencyCode","Value":"{CurrencyCode}","_Type":"KeyValue.Type.Item"},{"KeyName":"DimensionDepth","Value":"{DimensionDepth}","_Type":"KeyValue.Type.Item"},{"KeyName":"DimensionHeight","Value":"{DimensionHeight}","_Type":"KeyValue.Type.Item"},{"KeyName":"DimensionUnit","Value":"{DimensionUnit}","_Type":"KeyValue.Type.Item"},{"KeyName":"DimensionWidth","Value":"{DimensionWidth}","_Type":"KeyValue.Type.Item"},{"KeyName":"LongDescription","Value":"{LongDescription}","_Type":"KeyValue.Type.Item"},{"KeyName":"Name","Value":"{Name}","_Type":"KeyValue.Type.Item"},{"KeyName":"PictureUrl","Value":"{PictureUrl}","_Type":"KeyValue.Type.Item"},{"KeyName":"Price","Value":"{Price}","_Type":"KeyValue.Type.Item"},{"KeyName":"ProductID","Value":"{ProductID}","_Type":"KeyValue.Type.Item"},{"KeyName":"QuantityUnit","Value":"{QuantityUnit}","_Type":"KeyValue.Type.Item"},{"KeyName":"ShortDescription","Value":"{ShortDescription}","_Type":"KeyValue.Type.Item"},{"KeyName":"SupplierID","Value":"{SupplierID}","_Type":"KeyValue.Type.Item"},{"KeyName":"Weight","Value":"{Weight}","_Type":"KeyValue.Type.Item"},{"KeyName":"WeightUnit","Value":"{WeightUnit}","_Type":"KeyValue.Type.Item"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"},{"Header":{"Caption":"PurchaseOrderItems","_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{GrossAmount}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{ProductID}","Footnote":"{ItemNumber}","PreserveIconStackSpacing":false,"StatusText":"{NetAmount}","Subhead":"{CurrencyCode}","SubstatusText":"{PurchaseOrderID}","OnPress":"/My_App/Actions/com_sap_edm_sampleservice_v4/PurchaseOrderItems/NavToPurchaseOrderItems_Detail.action","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/PurchaseOrderItems","Service":"/My_App/Services/com_sap_edm_sampleservice_v4.service"},"_Type":"Section.Type.ObjectTable"},{"Header":{"Caption":"SalesOrderItems","_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{DeliveryDate}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{ProductID}","Footnote":"{GrossAmount}","PreserveIconStackSpacing":false,"StatusText":"{ItemNumber}","Subhead":"{CurrencyCode}","SubstatusText":"{NetAmount}","OnPress":"/My_App/Actions/com_sap_edm_sampleservice_v4/SalesOrderItems/NavToSalesOrderItems_Detail.action","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/SalesOrderItems","Service":"/My_App/Services/com_sap_edm_sampleservice_v4.service"},"_Type":"Section.Type.ObjectTable"}],"DataSubscriptions":["PurchaseOrderItems","SalesOrderItems"],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Products_Detail"}

/***/ }),

/***/ "./build.definitions/My_App/Pages/com_sap_edm_sampleservice_v4_Products/Products_List.page":
/*!*************************************************************************************************!*\
  !*** ./build.definitions/My_App/Pages/com_sap_edm_sampleservice_v4_Products/Products_List.page ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"Header":{"_Type":"SectionCommon.Type.Header","_Name":"SectionCommonTypeHeader0","AccessoryType":"None","UseTopPadding":false},"_Type":"Section.Type.ObjectTable","Target":{"EntitySet":"Products","Service":"/My_App/Services/com_sap_edm_sampleservice_v4.service","QueryOptions":""},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"Caption":"No record found!","FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"ObjectCell":{"Title":"{Name}","Subhead":"{Category}","Footnote":"{CurrencyCode}","Description":"{CategoryName}","StatusText":"{DimensionDepth}","SubstatusText":"{DimensionHeight}","PreserveIconStackSpacing":false,"AccessoryType":"DisclosureIndicator","Tags":[],"AvatarStack":{"Avatars":[{"Image":"/My_App/Services/com_sap_edm_sampleservice_v4.service/{@odata.readLink}/Picture"}],"ImageIsCircular":false,"ImageHasBorder":false},"AvatarGrid":{"ImageIsCircular":true},"OnPress":"/My_App/Actions/com_sap_edm_sampleservice_v4/Products/NavToProducts_Detail.action","_Type":"ObjectTable.Type.ObjectCell","Selected":false,"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true,"LeadingItems":[],"TrailingItems":[],"_Type":"ObjectCell.Type.ContextMenu"}},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Grouping":{"GroupingProperties":[],"Header":{"Items":[]}},"HighlightSelectedItem":false}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"}}],"_Type":"Page","_Name":"Products_List","ActionBar":{"Items":[],"_Name":"ActionBar1","_Type":"Control.Type.ActionBar","Caption":"$(L,Products)"}}

/***/ }),

/***/ "./build.definitions/My_App/Pages/com_sap_edm_sampleservice_v4_PurchaseOrderHeaders/PurchaseOrderHeaders_Detail.page":
/*!***************************************************************************************************************************!*\
  !*** ./build.definitions/My_App/Pages/com_sap_edm_sampleservice_v4_PurchaseOrderHeaders/PurchaseOrderHeaders_Detail.page ***!
  \***************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/My_App/Services/com_sap_edm_sampleservice_v4.service","EntitySet":"PurchaseOrderHeaders","QueryOptions":""},"ActionBar":{"Items":[],"Caption":"$(L,PurchaseOrderHeader_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{PurchaseOrderID}","Subhead":"{CurrencyCode}","BodyText":"","Footnote":"{NetAmount}","Description":"{GrossAmount}","StatusText":"{SupplierID}","StatusImage":"","SubstatusImage":"","SubstatusText":"{TaxAmount}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"CurrencyCode","Value":"{CurrencyCode}","_Type":"KeyValue.Type.Item"},{"KeyName":"GrossAmount","Value":"{GrossAmount}","_Type":"KeyValue.Type.Item"},{"KeyName":"NetAmount","Value":"{NetAmount}","_Type":"KeyValue.Type.Item"},{"KeyName":"PurchaseOrderID","Value":"{PurchaseOrderID}","_Type":"KeyValue.Type.Item"},{"KeyName":"SupplierID","Value":"{SupplierID}","_Type":"KeyValue.Type.Item"},{"KeyName":"TaxAmount","Value":"{TaxAmount}","_Type":"KeyValue.Type.Item"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"},{"Header":{"Caption":"Items","_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{GrossAmount}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{ProductID}","Footnote":"{ItemNumber}","PreserveIconStackSpacing":false,"StatusText":"{NetAmount}","Subhead":"{CurrencyCode}","SubstatusText":"{PurchaseOrderID}","OnPress":"/My_App/Actions/com_sap_edm_sampleservice_v4/PurchaseOrderItems/NavToPurchaseOrderItems_Detail.action","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/Items","Service":"/My_App/Services/com_sap_edm_sampleservice_v4.service"},"_Type":"Section.Type.ObjectTable"}],"DataSubscriptions":["PurchaseOrderItems"],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"PurchaseOrderHeaders_Detail"}

/***/ }),

/***/ "./build.definitions/My_App/Pages/com_sap_edm_sampleservice_v4_PurchaseOrderHeaders/PurchaseOrderHeaders_List.page":
/*!*************************************************************************************************************************!*\
  !*** ./build.definitions/My_App/Pages/com_sap_edm_sampleservice_v4_PurchaseOrderHeaders/PurchaseOrderHeaders_List.page ***!
  \*************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[],"Caption":"$(L,PurchaseOrderHeaders)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{GrossAmount}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/My_App/Actions/com_sap_edm_sampleservice_v4/PurchaseOrderHeaders/NavToPurchaseOrderHeaders_Detail.action","StatusImage":"","Title":"{PurchaseOrderID}","Footnote":"{NetAmount}","PreserveIconStackSpacing":false,"StatusText":"{SupplierID}","Subhead":"{CurrencyCode}","SubstatusText":"{TaxAmount}","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"PurchaseOrderHeaders","Service":"/My_App/Services/com_sap_edm_sampleservice_v4.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"PurchaseOrderHeaders_List"}

/***/ }),

/***/ "./build.definitions/My_App/Pages/com_sap_edm_sampleservice_v4_PurchaseOrderItems/PurchaseOrderItems_Detail.page":
/*!***********************************************************************************************************************!*\
  !*** ./build.definitions/My_App/Pages/com_sap_edm_sampleservice_v4_PurchaseOrderItems/PurchaseOrderItems_Detail.page ***!
  \***********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/My_App/Services/com_sap_edm_sampleservice_v4.service","EntitySet":"PurchaseOrderItems","QueryOptions":""},"ActionBar":{"Items":[],"Caption":"$(L,PurchaseOrderItem_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{ProductID}","Subhead":"{CurrencyCode}","BodyText":"","Footnote":"{ItemNumber}","Description":"{GrossAmount}","StatusText":"{NetAmount}","StatusImage":"","SubstatusImage":"","SubstatusText":"{PurchaseOrderID}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"CurrencyCode","Value":"{CurrencyCode}","_Type":"KeyValue.Type.Item"},{"KeyName":"GrossAmount","Value":"{GrossAmount}","_Type":"KeyValue.Type.Item"},{"KeyName":"ItemNumber","Value":"{ItemNumber}","_Type":"KeyValue.Type.Item"},{"KeyName":"NetAmount","Value":"{NetAmount}","_Type":"KeyValue.Type.Item"},{"KeyName":"ProductID","Value":"{ProductID}","_Type":"KeyValue.Type.Item"},{"KeyName":"PurchaseOrderID","Value":"{PurchaseOrderID}","_Type":"KeyValue.Type.Item"},{"KeyName":"Quantity","Value":"{Quantity}","_Type":"KeyValue.Type.Item"},{"KeyName":"QuantityUnit","Value":"{QuantityUnit}","_Type":"KeyValue.Type.Item"},{"KeyName":"TaxAmount","Value":"{TaxAmount}","_Type":"KeyValue.Type.Item"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"PurchaseOrderItems_Detail"}

/***/ }),

/***/ "./build.definitions/My_App/Pages/com_sap_edm_sampleservice_v4_PurchaseOrderItems/PurchaseOrderItems_List.page":
/*!*********************************************************************************************************************!*\
  !*** ./build.definitions/My_App/Pages/com_sap_edm_sampleservice_v4_PurchaseOrderItems/PurchaseOrderItems_List.page ***!
  \*********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[],"Caption":"$(L,PurchaseOrderItems)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{GrossAmount}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/My_App/Actions/com_sap_edm_sampleservice_v4/PurchaseOrderItems/NavToPurchaseOrderItems_Detail.action","StatusImage":"","Title":"{ProductID}","Footnote":"{ItemNumber}","PreserveIconStackSpacing":false,"StatusText":"{NetAmount}","Subhead":"{CurrencyCode}","SubstatusText":"{PurchaseOrderID}","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"PurchaseOrderItems","Service":"/My_App/Services/com_sap_edm_sampleservice_v4.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"PurchaseOrderItems_List"}

/***/ }),

/***/ "./build.definitions/My_App/Pages/com_sap_edm_sampleservice_v4_SalesOrderHeaders/SalesOrderHeaders_Detail.page":
/*!*********************************************************************************************************************!*\
  !*** ./build.definitions/My_App/Pages/com_sap_edm_sampleservice_v4_SalesOrderHeaders/SalesOrderHeaders_Detail.page ***!
  \*********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/My_App/Services/com_sap_edm_sampleservice_v4.service","EntitySet":"SalesOrderHeaders","QueryOptions":""},"ActionBar":{"Items":[],"Caption":"$(L,SalesOrderHeader_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{LifeCycleStatusName}","Subhead":"{CreatedAt}","BodyText":"","Footnote":"{CustomerID}","Description":"{CurrencyCode}","StatusText":"{GrossAmount}","StatusImage":"","SubstatusImage":"","SubstatusText":"{LifeCycleStatus}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"CreatedAt","Value":"{CreatedAt}","_Type":"KeyValue.Type.Item"},{"KeyName":"CurrencyCode","Value":"{CurrencyCode}","_Type":"KeyValue.Type.Item"},{"KeyName":"CustomerID","Value":"{CustomerID}","_Type":"KeyValue.Type.Item"},{"KeyName":"GrossAmount","Value":"{GrossAmount}","_Type":"KeyValue.Type.Item"},{"KeyName":"LifeCycleStatus","Value":"{LifeCycleStatus}","_Type":"KeyValue.Type.Item"},{"KeyName":"LifeCycleStatusName","Value":"{LifeCycleStatusName}","_Type":"KeyValue.Type.Item"},{"KeyName":"NetAmount","Value":"{NetAmount}","_Type":"KeyValue.Type.Item"},{"KeyName":"SalesOrderID","Value":"{SalesOrderID}","_Type":"KeyValue.Type.Item"},{"KeyName":"TaxAmount","Value":"{TaxAmount}","_Type":"KeyValue.Type.Item"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"},{"Header":{"Caption":"Items","_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{DeliveryDate}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{ProductID}","Footnote":"{GrossAmount}","PreserveIconStackSpacing":false,"StatusText":"{ItemNumber}","Subhead":"{CurrencyCode}","SubstatusText":"{NetAmount}","OnPress":"/My_App/Actions/com_sap_edm_sampleservice_v4/SalesOrderItems/NavToSalesOrderItems_Detail.action","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/Items","Service":"/My_App/Services/com_sap_edm_sampleservice_v4.service"},"_Type":"Section.Type.ObjectTable"}],"DataSubscriptions":["SalesOrderItems"],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"SalesOrderHeaders_Detail"}

/***/ }),

/***/ "./build.definitions/My_App/Pages/com_sap_edm_sampleservice_v4_SalesOrderHeaders/SalesOrderHeaders_List.page":
/*!*******************************************************************************************************************!*\
  !*** ./build.definitions/My_App/Pages/com_sap_edm_sampleservice_v4_SalesOrderHeaders/SalesOrderHeaders_List.page ***!
  \*******************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[],"Caption":"$(L,SalesOrderHeaders)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{CurrencyCode}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/My_App/Actions/com_sap_edm_sampleservice_v4/SalesOrderHeaders/NavToSalesOrderHeaders_Detail.action","StatusImage":"","Title":"{LifeCycleStatusName}","Footnote":"{CustomerID}","PreserveIconStackSpacing":false,"StatusText":"{GrossAmount}","Subhead":"{CreatedAt}","SubstatusText":"{LifeCycleStatus}","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"SalesOrderHeaders","Service":"/My_App/Services/com_sap_edm_sampleservice_v4.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"SalesOrderHeaders_List"}

/***/ }),

/***/ "./build.definitions/My_App/Pages/com_sap_edm_sampleservice_v4_SalesOrderItems/SalesOrderItems_Detail.page":
/*!*****************************************************************************************************************!*\
  !*** ./build.definitions/My_App/Pages/com_sap_edm_sampleservice_v4_SalesOrderItems/SalesOrderItems_Detail.page ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/My_App/Services/com_sap_edm_sampleservice_v4.service","EntitySet":"SalesOrderItems","QueryOptions":""},"ActionBar":{"Items":[],"Caption":"$(L,SalesOrderItem_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{ProductID}","Subhead":"{CurrencyCode}","BodyText":"","Footnote":"{GrossAmount}","Description":"{DeliveryDate}","StatusText":"{ItemNumber}","StatusImage":"","SubstatusImage":"","SubstatusText":"{NetAmount}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"CurrencyCode","Value":"{CurrencyCode}","_Type":"KeyValue.Type.Item"},{"KeyName":"DeliveryDate","Value":"{DeliveryDate}","_Type":"KeyValue.Type.Item"},{"KeyName":"GrossAmount","Value":"{GrossAmount}","_Type":"KeyValue.Type.Item"},{"KeyName":"ItemNumber","Value":"{ItemNumber}","_Type":"KeyValue.Type.Item"},{"KeyName":"NetAmount","Value":"{NetAmount}","_Type":"KeyValue.Type.Item"},{"KeyName":"ProductID","Value":"{ProductID}","_Type":"KeyValue.Type.Item"},{"KeyName":"Quantity","Value":"{Quantity}","_Type":"KeyValue.Type.Item"},{"KeyName":"QuantityUnit","Value":"{QuantityUnit}","_Type":"KeyValue.Type.Item"},{"KeyName":"SalesOrderID","Value":"{SalesOrderID}","_Type":"KeyValue.Type.Item"},{"KeyName":"TaxAmount","Value":"{TaxAmount}","_Type":"KeyValue.Type.Item"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"SalesOrderItems_Detail"}

/***/ }),

/***/ "./build.definitions/My_App/Pages/com_sap_edm_sampleservice_v4_SalesOrderItems/SalesOrderItems_List.page":
/*!***************************************************************************************************************!*\
  !*** ./build.definitions/My_App/Pages/com_sap_edm_sampleservice_v4_SalesOrderItems/SalesOrderItems_List.page ***!
  \***************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[],"Caption":"$(L,SalesOrderItems)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{DeliveryDate}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/My_App/Actions/com_sap_edm_sampleservice_v4/SalesOrderItems/NavToSalesOrderItems_Detail.action","StatusImage":"","Title":"{ProductID}","Footnote":"{GrossAmount}","PreserveIconStackSpacing":false,"StatusText":"{ItemNumber}","Subhead":"{CurrencyCode}","SubstatusText":"{NetAmount}","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"SalesOrderItems","Service":"/My_App/Services/com_sap_edm_sampleservice_v4.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"SalesOrderItems_List"}

/***/ }),

/***/ "./build.definitions/My_App/Pages/com_sap_edm_sampleservice_v4_Suppliers/Suppliers_Detail.page":
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/My_App/Pages/com_sap_edm_sampleservice_v4_Suppliers/Suppliers_Detail.page ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/My_App/Services/com_sap_edm_sampleservice_v4.service","EntitySet":"Suppliers","QueryOptions":""},"ActionBar":{"Items":[],"Caption":"$(L,Supplier_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{SupplierName}","Subhead":"{City}","BodyText":"","Footnote":"{EmailAddress}","Description":"{Country}","StatusText":"{HouseNumber}","StatusImage":"","SubstatusImage":"","SubstatusText":"{PhoneNumber}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"City","Value":"{City}","_Type":"KeyValue.Type.Item"},{"KeyName":"Country","Value":"{Country}","_Type":"KeyValue.Type.Item"},{"KeyName":"EmailAddress","Value":"{EmailAddress}","_Type":"KeyValue.Type.Item"},{"KeyName":"HouseNumber","Value":"{HouseNumber}","_Type":"KeyValue.Type.Item"},{"KeyName":"PhoneNumber","Value":"{PhoneNumber}","_Type":"KeyValue.Type.Item"},{"KeyName":"PostalCode","Value":"{PostalCode}","_Type":"KeyValue.Type.Item"},{"KeyName":"Street","Value":"{Street}","_Type":"KeyValue.Type.Item"},{"KeyName":"SupplierID","Value":"{SupplierID}","_Type":"KeyValue.Type.Item"},{"KeyName":"SupplierName","Value":"{SupplierName}","_Type":"KeyValue.Type.Item"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"},{"Header":{"Caption":"Address","_Type":"SectionCommon.Type.Header"},"KeyAndValues":[{"KeyName":"HouseNumber","Value":"{Address/HouseNumber}","_Type":"KeyValue.Type.Item"},{"KeyName":"Street","Value":"{Address/Street}","_Type":"KeyValue.Type.Item"},{"KeyName":"City","Value":"{Address/City}","_Type":"KeyValue.Type.Item"},{"KeyName":"Country","Value":"{Address/Country}","_Type":"KeyValue.Type.Item"},{"KeyName":"PostalCode","Value":"{Address/PostalCode}","_Type":"KeyValue.Type.Item"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValueAddress","_Type":"Section.Type.KeyValue"},{"Header":{"Caption":"Products","_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{CategoryName}","AvatarStack":{"Avatars":[{"Image":"/My_App/Services/com_sap_edm_sampleservice_v4.service/{@odata.readLink}/Picture"}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{Name}","Footnote":"{CurrencyCode}","PreserveIconStackSpacing":false,"StatusText":"{DimensionDepth}","Subhead":"{Category}","SubstatusText":"{DimensionHeight}","OnPress":"/My_App/Actions/com_sap_edm_sampleservice_v4/Products/NavToProducts_Detail.action","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/Products","Service":"/My_App/Services/com_sap_edm_sampleservice_v4.service"},"_Type":"Section.Type.ObjectTable"},{"Header":{"Caption":"PurchaseOrders","_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{GrossAmount}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{PurchaseOrderID}","Footnote":"{NetAmount}","PreserveIconStackSpacing":false,"StatusText":"{SupplierID}","Subhead":"{CurrencyCode}","SubstatusText":"{TaxAmount}","OnPress":"/My_App/Actions/com_sap_edm_sampleservice_v4/PurchaseOrderHeaders/NavToPurchaseOrderHeaders_Detail.action","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/PurchaseOrders","Service":"/My_App/Services/com_sap_edm_sampleservice_v4.service"},"_Type":"Section.Type.ObjectTable"}],"DataSubscriptions":["Products","PurchaseOrderHeaders"],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Suppliers_Detail"}

/***/ }),

/***/ "./build.definitions/My_App/Pages/com_sap_edm_sampleservice_v4_Suppliers/Suppliers_List.page":
/*!***************************************************************************************************!*\
  !*** ./build.definitions/My_App/Pages/com_sap_edm_sampleservice_v4_Suppliers/Suppliers_List.page ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[],"Caption":"$(L,Suppliers)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{Country}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/My_App/Actions/com_sap_edm_sampleservice_v4/Suppliers/NavToSuppliers_Detail.action","StatusImage":"","Title":"{SupplierName}","Footnote":"{EmailAddress}","PreserveIconStackSpacing":false,"StatusText":"{HouseNumber}","Subhead":"{City}","SubstatusText":"{PhoneNumber}","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Suppliers","Service":"/My_App/Services/com_sap_edm_sampleservice_v4.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Suppliers_List"}

/***/ }),

/***/ "./build.definitions/Application.app":
/*!*******************************************!*\
  !*** ./build.definitions/Application.app ***!
  \*******************************************/
/***/ ((module) => {

module.exports = {"_Name":"My_App","Version":"/My_App/Globals/Application/AppDefinition_Version.global","MainPage":"/My_App/Pages/Main.page","OnLaunch":"/My_App/Rules/Service/Initialize.js","OnWillUpdate":"/My_App/Rules/Application/OnWillUpdate.js","OnDidUpdate":"/My_App/Rules/Service/Initialize.js","Styles":"/My_App/Styles/Styles.css","Localization":"/My_App/i18n/i18n.properties","_SchemaVersion":"25.9","StyleSheets":{"Styles":{"css":"/My_App/Styles/Styles.light.css","ios":"/My_App/Styles/Styles.light.nss","android":"/My_App/Styles/Styles.light.json"}},"SDKStyles":{"ios":"/My_App/Styles/Styles.light.nss","android":"/My_App/Styles/Styles.light.json"}}

/***/ }),

/***/ "./build.definitions/My_App/Actions/Application/AppUpdate.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/My_App/Actions/Application/AppUpdate.action ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ApplicationUpdate","ActionResult":{"_Name":"AppUpdate"},"OnFailure":"/My_App/Rules/Application/AppUpdateFailure.js","OnSuccess":"/My_App/Rules/Application/AppUpdateSuccess.js"}

/***/ }),

/***/ "./build.definitions/My_App/Actions/Application/AppUpdateFailureMessage.action":
/*!*************************************************************************************!*\
  !*** ./build.definitions/My_App/Actions/Application/AppUpdateFailureMessage.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to update application - {#ActionResults:AppUpdate/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/My_App/Actions/Application/AppUpdateProgressBanner.action":
/*!*************************************************************************************!*\
  !*** ./build.definitions/My_App/Actions/Application/AppUpdateProgressBanner.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionTimeout":3,"Message":"Checking for Updates...","OnSuccess":"/My_App/Actions/Application/AppUpdate.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/My_App/Actions/Application/AppUpdateSuccessMessage.action":
/*!*************************************************************************************!*\
  !*** ./build.definitions/My_App/Actions/Application/AppUpdateSuccessMessage.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Update application complete","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/My_App/Actions/Application/Logout.action":
/*!********************************************************************!*\
  !*** ./build.definitions/My_App/Actions/Application/Logout.action ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":true}

/***/ }),

/***/ "./build.definitions/My_App/Actions/Application/NavToAbout.action":
/*!************************************************************************!*\
  !*** ./build.definitions/My_App/Actions/Application/NavToAbout.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"PageToOpen":"/My_App/Pages/Application/About.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/My_App/Actions/Application/NavToActivityLog.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/My_App/Actions/Application/NavToActivityLog.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"PageToOpen":"/My_App/Pages/Application/UserActivityLog.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/My_App/Actions/Application/NavToSupport.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/My_App/Actions/Application/NavToSupport.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"NavigationType":"Cross","PageToOpen":"/My_App/Pages/Application/Support.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/My_App/Actions/Application/OnWillUpdate.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/My_App/Actions/Application/OnWillUpdate.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"A new version of the application is now ready to apply. Do you want to update to this version?","Title":"New Version Available!","OKCaption":"Now","CancelCaption":"Later","ActionResult":{"_Name":"OnWillUpdate"}}

/***/ }),

/***/ "./build.definitions/My_App/Actions/Application/Reset.action":
/*!*******************************************************************!*\
  !*** ./build.definitions/My_App/Actions/Application/Reset.action ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":false}

/***/ }),

/***/ "./build.definitions/My_App/Actions/Application/ResetMessage.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/My_App/Actions/Application/ResetMessage.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"This action will remove all data and return to the Welcome screen. Any local data will be lost. Are you sure you want to continue?","Title":"Reset","OKCaption":"Yes","OnOK":"/My_App/Rules/Application/ResetAppSettingsAndLogout.js","CancelCaption":"No"}

/***/ }),

/***/ "./build.definitions/My_App/Actions/Application/UserMenuPopover.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/My_App/Actions/Application/UserMenuPopover.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"PopoverItems":[{"Enabled":true,"Icon":"sap-icon://synchronize","OnPress":"/My_App/Actions/com_sap_edm_sampleservice_v4/Service/SyncStartedMessage.action","Title":"Sync Changes","Visible":"$(PLT,true,true,false)"},{"Enabled":true,"Icon":"sap-icon://headset","OnPress":"/My_App/Actions/Application/NavToSupport.action","Title":"Support","Visible":true},{"Enabled":true,"Icon":"sap-icon://refresh","OnPress":"/My_App/Actions/Application/AppUpdateProgressBanner.action","Title":"Check for Updates","Visible":"$(PLT,true,true,false)"},{"Enabled":true,"Icon":"sap-icon://hint","OnPress":"/My_App/Actions/Application/NavToAbout.action","Title":"About","Visible":true},{"Enabled":true,"Icon":"sap-icon://reset","OnPress":"/My_App/Actions/Application/ResetMessage.action","Title":"Reset","Visible":true},{"Enabled":true,"Icon":"sap-icon://log","OnPress":"/My_App/Actions/Application/Logout.action","Title":"Logout","Visible":"/My_App/Rules/Application/ClientIsMultiUserMode.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ }),

/***/ "./build.definitions/My_App/Actions/CloseModalPage_Cancel.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/My_App/Actions/CloseModalPage_Cancel.action ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Canceled","CancelPendingActions":true,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/My_App/Actions/CloseModalPage_Complete.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/My_App/Actions/CloseModalPage_Complete.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Completed","CancelPendingActions":false,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/My_App/Actions/ClosePage.action":
/*!***********************************************************!*\
  !*** ./build.definitions/My_App/Actions/ClosePage.action ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/My_App/Actions/Customer_UpdateEntity.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/My_App/Actions/Customer_UpdateEntity.action ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","ActionResult":{"_Name":"Customer_UpdateEntity"},"OnFailure":"/My_App/Actions/UpdateCustomerEntityFailMessage.action","OnSuccess":"/My_App/Actions/CloseModalPage_Complete.action","Target":{"Service":"/My_App/Services/com_sap_edm_sampleservice_v4.service","EntitySet":"Customers","ReadLink":"{@odata.readLink}"},"Properties":{"EmailAddress":"#Control:FCEmail/#Value","FirstName":"#Control:FCFirstName/#Value","LastName":"#Control:FCLastName/#Value","PhoneNumber":"#Control:FCPhone/#Value"}}

/***/ }),

/***/ "./build.definitions/My_App/Actions/ErrorArchive/ErrorArchive_SyncFailure.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/My_App/Actions/ErrorArchive/ErrorArchive_SyncFailure.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.BannerMessage","Message":"Upload failed!","Duration":0,"Animated":false,"OnActionLabelPress":"/My_App/Actions/ErrorArchive/NavToErrorArchive_List.action","ActionLabel":"View Errors"}

/***/ }),

/***/ "./build.definitions/My_App/Actions/ErrorArchive/NavToErrorArchive_Detail.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/My_App/Actions/ErrorArchive/NavToErrorArchive_Detail.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/My_App/Pages/ErrorArchive/ErrorArchive_Detail.page","NavigationType":"Inner"}

/***/ }),

/***/ "./build.definitions/My_App/Actions/ErrorArchive/NavToErrorArchive_List.action":
/*!*************************************************************************************!*\
  !*** ./build.definitions/My_App/Actions/ErrorArchive/NavToErrorArchive_List.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/My_App/Pages/ErrorArchive/ErrorArchive_List.page","NavigationType":"Inner"}

/***/ }),

/***/ "./build.definitions/My_App/Actions/GenericBannerMessage.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/My_App/Actions/GenericBannerMessage.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.BannerMessage","ActionResult":{"_Name":"GenericBannerMessage"},"Message":"Message"}

/***/ }),

/***/ "./build.definitions/My_App/Actions/GenericMessageBox.action":
/*!*******************************************************************!*\
  !*** ./build.definitions/My_App/Actions/GenericMessageBox.action ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"GenericMessageBox"},"Message":"Message","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/My_App/Actions/GenericNavigation.action":
/*!*******************************************************************!*\
  !*** ./build.definitions/My_App/Actions/GenericNavigation.action ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"GenericNavigation"},"PageToOpen":"/My_App/Pages/Main.page"}

/***/ }),

/***/ "./build.definitions/My_App/Actions/GenericToastMessage.action":
/*!*********************************************************************!*\
  !*** ./build.definitions/My_App/Actions/GenericToastMessage.action ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ToastMessage","ActionResult":{"_Name":"GenericToastMessage"},"Message":"Message"}

/***/ }),

/***/ "./build.definitions/My_App/Actions/Logging/LogUploadFailure.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/My_App/Actions/Logging/LogUploadFailure.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Uploading log file failed with error: {#ActionResults:UploadLog/error}","OKCaption":"OK","Title":"Log Upload Failed","_Type":"Action.Type.Message"}

/***/ }),

/***/ "./build.definitions/My_App/Actions/Logging/LogUploadSuccessful.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/My_App/Actions/Logging/LogUploadSuccessful.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":3,"IsIconHidden":false,"MaxNumberOfLines":1,"Message":"Log File Uploaded","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/My_App/Actions/Logging/UploadLog.action":
/*!*******************************************************************!*\
  !*** ./build.definitions/My_App/Actions/Logging/UploadLog.action ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = {"ActionResult":{"_Name":"UploadLog"},"ActivityIndicatorText":"Uploading...","OnFailure":"/My_App/Actions/Logging/LogUploadFailure.action","OnSuccess":"/My_App/Actions/Logging/LogUploadSuccessful.action","ShowActivityIndicator":false,"_Type":"Action.Type.Logger.Upload"}

/***/ }),

/***/ "./build.definitions/My_App/Actions/Logging/UploadLogProgress.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/My_App/Actions/Logging/UploadLogProgress.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionMessage":"Logs Uploaded","CompletionTimeout":2,"Message":"Uploading Log Files...","OnSuccess":"/My_App/Actions/Logging/UploadLog.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/My_App/Actions/NavToCustomer_List.action":
/*!********************************************************************!*\
  !*** ./build.definitions/My_App/Actions/NavToCustomer_List.action ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavToCustomer_List"},"PageToOpen":"/My_App/Pages/CustomerList.page"}

/***/ }),

/***/ "./build.definitions/My_App/Actions/UpdateCustomerEntityFailMessage.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/My_App/Actions/UpdateCustomerEntityFailMessage.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"UpdateCustomerEntityFailMessage"},"Message":"Failed to Save Customer updates - {#ActionResults:Customer_UpdateEntity/error}","Title":"Update Customer","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/Customers/NavToCustomers_Detail.action":
/*!**************************************************************************************************************!*\
  !*** ./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/Customers/NavToCustomers_Detail.action ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/My_App/Pages/com_sap_edm_sampleservice_v4_Customers/Customers_Detail.page"}

/***/ }),

/***/ "./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/Customers/NavToCustomers_List.action":
/*!************************************************************************************************************!*\
  !*** ./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/Customers/NavToCustomers_List.action ***!
  \************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/My_App/Pages/com_sap_edm_sampleservice_v4_Customers/Customers_List.page"}

/***/ }),

/***/ "./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/Products/NavToProducts_Detail.action":
/*!************************************************************************************************************!*\
  !*** ./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/Products/NavToProducts_Detail.action ***!
  \************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/My_App/Pages/com_sap_edm_sampleservice_v4_Products/Products_Detail.page"}

/***/ }),

/***/ "./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/Products/NavToProducts_List.action":
/*!**********************************************************************************************************!*\
  !*** ./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/Products/NavToProducts_List.action ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/My_App/Pages/com_sap_edm_sampleservice_v4_Products/Products_List.page"}

/***/ }),

/***/ "./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/PurchaseOrderHeaders/NavToPurchaseOrderHeaders_Detail.action":
/*!************************************************************************************************************************************!*\
  !*** ./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/PurchaseOrderHeaders/NavToPurchaseOrderHeaders_Detail.action ***!
  \************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/My_App/Pages/com_sap_edm_sampleservice_v4_PurchaseOrderHeaders/PurchaseOrderHeaders_Detail.page"}

/***/ }),

/***/ "./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/PurchaseOrderHeaders/NavToPurchaseOrderHeaders_List.action":
/*!**********************************************************************************************************************************!*\
  !*** ./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/PurchaseOrderHeaders/NavToPurchaseOrderHeaders_List.action ***!
  \**********************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/My_App/Pages/com_sap_edm_sampleservice_v4_PurchaseOrderHeaders/PurchaseOrderHeaders_List.page"}

/***/ }),

/***/ "./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/PurchaseOrderItems/NavToPurchaseOrderItems_Detail.action":
/*!********************************************************************************************************************************!*\
  !*** ./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/PurchaseOrderItems/NavToPurchaseOrderItems_Detail.action ***!
  \********************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/My_App/Pages/com_sap_edm_sampleservice_v4_PurchaseOrderItems/PurchaseOrderItems_Detail.page"}

/***/ }),

/***/ "./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/PurchaseOrderItems/NavToPurchaseOrderItems_List.action":
/*!******************************************************************************************************************************!*\
  !*** ./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/PurchaseOrderItems/NavToPurchaseOrderItems_List.action ***!
  \******************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/My_App/Pages/com_sap_edm_sampleservice_v4_PurchaseOrderItems/PurchaseOrderItems_List.page"}

/***/ }),

/***/ "./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/SalesOrderHeaders/NavToSalesOrderHeaders_Detail.action":
/*!******************************************************************************************************************************!*\
  !*** ./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/SalesOrderHeaders/NavToSalesOrderHeaders_Detail.action ***!
  \******************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/My_App/Pages/com_sap_edm_sampleservice_v4_SalesOrderHeaders/SalesOrderHeaders_Detail.page"}

/***/ }),

/***/ "./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/SalesOrderHeaders/NavToSalesOrderHeaders_List.action":
/*!****************************************************************************************************************************!*\
  !*** ./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/SalesOrderHeaders/NavToSalesOrderHeaders_List.action ***!
  \****************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/My_App/Pages/com_sap_edm_sampleservice_v4_SalesOrderHeaders/SalesOrderHeaders_List.page"}

/***/ }),

/***/ "./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/SalesOrderItems/NavToSalesOrderItems_Detail.action":
/*!**************************************************************************************************************************!*\
  !*** ./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/SalesOrderItems/NavToSalesOrderItems_Detail.action ***!
  \**************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/My_App/Pages/com_sap_edm_sampleservice_v4_SalesOrderItems/SalesOrderItems_Detail.page"}

/***/ }),

/***/ "./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/SalesOrderItems/NavToSalesOrderItems_List.action":
/*!************************************************************************************************************************!*\
  !*** ./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/SalesOrderItems/NavToSalesOrderItems_List.action ***!
  \************************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/My_App/Pages/com_sap_edm_sampleservice_v4_SalesOrderItems/SalesOrderItems_List.page"}

/***/ }),

/***/ "./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/Service/CloseOffline.action":
/*!***************************************************************************************************!*\
  !*** ./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/Service/CloseOffline.action ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.OfflineOData.Close","Service":"/My_App/Services/com_sap_edm_sampleservice_v4.service","Force":true,"ActionResult":{"_Name":"close"},"OnSuccess":"/My_App/Actions/com_sap_edm_sampleservice_v4/Service/CloseOfflineSuccessMessage.action","OnFailure":"/My_App/Actions/com_sap_edm_sampleservice_v4/Service/CloseOfflineFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/Service/CloseOfflineFailureMessage.action":
/*!*****************************************************************************************************************!*\
  !*** ./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/Service/CloseOfflineFailureMessage.action ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failure closing data service - {#ActionResults:close/error}","NumberOfLines":1,"Duration":3,"Animated":true,"IsIconHidden":true,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/Service/CloseOfflineSuccessMessage.action":
/*!*****************************************************************************************************************!*\
  !*** ./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/Service/CloseOfflineSuccessMessage.action ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Data service closed successfully","NumberOfLines":1,"Duration":3,"Animated":true,"IsIconHidden":true,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/Service/DownloadOffline.action":
/*!******************************************************************************************************!*\
  !*** ./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/Service/DownloadOffline.action ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/My_App/Services/com_sap_edm_sampleservice_v4.service","DefiningRequests":[{"Name":"PurchaseOrderHeaders","Query":"PurchaseOrderHeaders"},{"Name":"PurchaseOrderItems","Query":"PurchaseOrderItems"},{"Name":"SalesOrderHeaders","Query":"SalesOrderHeaders"},{"Name":"SalesOrderItems","Query":"SalesOrderItems"},{"Name":"Products","Query":"Products"},{"Name":"Customers","Query":"Customers"},{"Name":"Suppliers","Query":"Suppliers"}],"_Type":"Action.Type.OfflineOData.Download","ActionResult":{"_Name":"sync"},"OnFailure":"/My_App/Actions/com_sap_edm_sampleservice_v4/Service/SyncFailureMessage.action","OnSuccess":"/My_App/Rules/com_sap_edm_sampleservice_v4/ErrorArchive_CheckForSyncError.js"}

/***/ }),

/***/ "./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/Service/DownloadStartedMessage.action":
/*!*************************************************************************************************************!*\
  !*** ./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/Service/DownloadStartedMessage.action ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Download in progress...","CompletionMessage":"Download Successful","CompletionTimeout":7,"OnSuccess":"/My_App/Actions/com_sap_edm_sampleservice_v4/Service/DownloadOffline.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/Service/InitializeOffline.action":
/*!********************************************************************************************************!*\
  !*** ./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/Service/InitializeOffline.action ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/My_App/Services/com_sap_edm_sampleservice_v4.service","DefiningRequests":[{"Name":"PurchaseOrderHeaders","Query":"PurchaseOrderHeaders"},{"Name":"PurchaseOrderItems","Query":"PurchaseOrderItems"},{"Name":"SalesOrderHeaders","Query":"SalesOrderHeaders"},{"Name":"SalesOrderItems","Query":"SalesOrderItems"},{"Name":"Products","Query":"Products"},{"Name":"Customers","Query":"Customers"},{"Name":"Suppliers","Query":"Suppliers"}],"_Type":"Action.Type.ODataService.Initialize","ShowActivityIndicator":true,"ActivityIndicatorText":"Downloading...","ActionResult":{"_Name":"init"},"OnFailure":"/My_App/Actions/com_sap_edm_sampleservice_v4/Service/InitializeOfflineFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/Service/InitializeOfflineFailureMessage.action":
/*!**********************************************************************************************************************!*\
  !*** ./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/Service/InitializeOfflineFailureMessage.action ***!
  \**********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to initialize application data service - {#ActionResults:init/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/Service/SyncFailureMessage.action":
/*!*********************************************************************************************************!*\
  !*** ./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/Service/SyncFailureMessage.action ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Sync offline data service failure - {#ActionResults:sync/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/Service/SyncStartedMessage.action":
/*!*********************************************************************************************************!*\
  !*** ./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/Service/SyncStartedMessage.action ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Upload in progress...","CompletionMessage":"Sync completed","CompletionTimeout":7,"OnSuccess":"/My_App/Actions/com_sap_edm_sampleservice_v4/Service/UploadOffline.action","OnFailure":"/My_App/Actions/com_sap_edm_sampleservice_v4/Service/SyncFailureMessage.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/Service/UploadOffline.action":
/*!****************************************************************************************************!*\
  !*** ./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/Service/UploadOffline.action ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/My_App/Services/com_sap_edm_sampleservice_v4.service","_Type":"Action.Type.OfflineOData.Upload","ActionResult":{"_Name":"sync"},"OnSuccess":"/My_App/Actions/com_sap_edm_sampleservice_v4/Service/DownloadStartedMessage.action","OnFailure":"/My_App/Actions/com_sap_edm_sampleservice_v4/Service/SyncFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/Suppliers/NavToSuppliers_Detail.action":
/*!**************************************************************************************************************!*\
  !*** ./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/Suppliers/NavToSuppliers_Detail.action ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/My_App/Pages/com_sap_edm_sampleservice_v4_Suppliers/Suppliers_Detail.page"}

/***/ }),

/***/ "./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/Suppliers/NavToSuppliers_List.action":
/*!************************************************************************************************************!*\
  !*** ./build.definitions/My_App/Actions/com_sap_edm_sampleservice_v4/Suppliers/NavToSuppliers_List.action ***!
  \************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/My_App/Pages/com_sap_edm_sampleservice_v4_Suppliers/Suppliers_List.page"}

/***/ }),

/***/ "./build.definitions/My_App/Actions/navToCustomer_Details.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/My_App/Actions/navToCustomer_Details.action ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"navToCustomer_Details"},"PageToOpen":"/My_App/Pages/Customers_detail.page"}

/***/ }),

/***/ "./build.definitions/My_App/Actions/navToCustomer_Edit.action":
/*!********************************************************************!*\
  !*** ./build.definitions/My_App/Actions/navToCustomer_Edit.action ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"navToCustomer_Edit"},"PageToOpen":"/My_App/Pages/Customer_Edit.page","ModalPage":true}

/***/ }),

/***/ "./build.definitions/My_App/Actions/navto_productnav.action":
/*!******************************************************************!*\
  !*** ./build.definitions/My_App/Actions/navto_productnav.action ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"navto_productnav"},"PageToOpen":"/My_App/Pages/Productnav.page","NavigationType":"Inner"}

/***/ }),

/***/ "./build.definitions/My_App/Globals/Application/AppDefinition_Version.global":
/*!***********************************************************************************!*\
  !*** ./build.definitions/My_App/Globals/Application/AppDefinition_Version.global ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1.0.0","_Type":"String"}

/***/ }),

/***/ "./build.definitions/My_App/Globals/Application/ApplicationName.global":
/*!*****************************************************************************!*\
  !*** ./build.definitions/My_App/Globals/Application/ApplicationName.global ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"MDK App","_Type":"String"}

/***/ }),

/***/ "./build.definitions/My_App/Globals/Application/SupportEmail.global":
/*!**************************************************************************!*\
  !*** ./build.definitions/My_App/Globals/Application/SupportEmail.global ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"support@mycompany.com","_Type":"String"}

/***/ }),

/***/ "./build.definitions/My_App/Globals/Application/SupportPhone.global":
/*!**************************************************************************!*\
  !*** ./build.definitions/My_App/Globals/Application/SupportPhone.global ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1-800-677-7271","_Type":"String"}

/***/ }),

/***/ "./build.definitions/My_App/Services/com_sap_edm_sampleservice_v4.service":
/*!********************************************************************************!*\
  !*** ./build.definitions/My_App/Services/com_sap_edm_sampleservice_v4.service ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"DestinationName":"com.sap.edm.sampleservice.v4","OfflineEnabled":true,"LanguageURLParam":"","OnlineOptions":{},"OfflineOptions":{"StoreParameters":{}},"PathSuffix":"","SourceType":"Mobile","ServiceUrl":""}

/***/ }),

/***/ "./build.definitions/version.mdkbundlerversion":
/*!*****************************************************!*\
  !*** ./build.definitions/version.mdkbundlerversion ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "1.1\n";

/***/ }),

/***/ "webpack/container/entry/bundle.js":
/*!***********************!*\
  !*** container entry ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var moduleMap = {
	".": () => {
		return Promise.resolve().then(() => (() => ((__webpack_require__(/*! ./build.definitions/application-index.js */ "./build.definitions/application-index.js")))));
	}
};
var get = (module, getScope) => {
	__webpack_require__.R = getScope;
	getScope = (
		__webpack_require__.o(moduleMap, module)
			? moduleMap[module]()
			: Promise.resolve().then(() => {
				throw new Error('Module "' + module + '" does not exist in container.');
			})
	);
	__webpack_require__.R = undefined;
	return getScope;
};
var init = (shareScope, initScope) => {
	if (!__webpack_require__.S) return;
	var name = "default"
	var oldScope = __webpack_require__.S[name];
	if(oldScope && oldScope !== shareScope) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
	__webpack_require__.S[name] = shareScope;
	return __webpack_require__.I(name, initScope);
};

// This exports getters to disallow modifications
__webpack_require__.d(exports, {
	get: () => (get),
	init: () => (init)
});

/***/ }),

/***/ "./build.definitions/My_App/Styles/Styles.light.json":
/*!***********************************************************!*\
  !*** ./build.definitions/My_App/Styles/Styles.light.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ "./build.definitions/My_App/jsconfig.json":
/*!************************************************!*\
  !*** ./build.definitions/My_App/jsconfig.json ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"include":["Rules/**/*",".typings/**/*"]}');

/***/ }),

/***/ "./build.definitions/tsconfig.json":
/*!*****************************************!*\
  !*** ./build.definitions/tsconfig.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"compilerOptions":{"module":"esnext","target":"es2019","moduleResolution":"node","lib":["esnext","dom"],"experimentalDecorators":true,"emitDecoratorMetadata":true,"removeComments":true,"inlineSourceMap":true,"noEmitOnError":false,"noEmitHelpers":true,"baseUrl":".","plugins":[{"transform":"@nativescript/webpack/dist/transformers/NativeClass","type":"raw"}]},"exclude":["node_modules"]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/sharing */
/******/ 	(() => {
/******/ 		__webpack_require__.S = {};
/******/ 		var initPromises = {};
/******/ 		var initTokens = {};
/******/ 		__webpack_require__.I = (name, initScope) => {
/******/ 			if(!initScope) initScope = [];
/******/ 			// handling circular init calls
/******/ 			var initToken = initTokens[name];
/******/ 			if(!initToken) initToken = initTokens[name] = {};
/******/ 			if(initScope.indexOf(initToken) >= 0) return;
/******/ 			initScope.push(initToken);
/******/ 			// only runs once
/******/ 			if(initPromises[name]) return initPromises[name];
/******/ 			// creates a new share scope if needed
/******/ 			if(!__webpack_require__.o(__webpack_require__.S, name)) __webpack_require__.S[name] = {};
/******/ 			// runs all init snippets from all modules reachable
/******/ 			var scope = __webpack_require__.S[name];
/******/ 			var warn = (msg) => {
/******/ 				if (typeof console !== "undefined" && console.warn) console.warn(msg);
/******/ 			};
/******/ 			var uniqueName = undefined;
/******/ 			var register = (name, version, factory, eager) => {
/******/ 				var versions = scope[name] = scope[name] || {};
/******/ 				var activeVersion = versions[version];
/******/ 				if(!activeVersion || (!activeVersion.loaded && (!eager != !activeVersion.eager ? eager : uniqueName > activeVersion.from))) versions[version] = { get: factory, from: uniqueName, eager: !!eager };
/******/ 			};
/******/ 			var initExternal = (id) => {
/******/ 				var handleError = (err) => (warn("Initialization of sharing external failed: " + err));
/******/ 				try {
/******/ 					var module = __webpack_require__(id);
/******/ 					if(!module) return;
/******/ 					var initFn = (module) => (module && module.init && module.init(__webpack_require__.S[name], initScope))
/******/ 					if(module.then) return promises.push(module.then(initFn, handleError));
/******/ 					var initResult = initFn(module);
/******/ 					if(initResult && initResult.then) return promises.push(initResult['catch'](handleError));
/******/ 				} catch(err) { handleError(err); }
/******/ 			}
/******/ 			var promises = [];
/******/ 			switch(name) {
/******/ 			}
/******/ 			if(!promises.length) return initPromises[name] = 1;
/******/ 			return initPromises[name] = Promise.all(promises).then(() => (initPromises[name] = 1));
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("webpack/container/entry/bundle.js");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;