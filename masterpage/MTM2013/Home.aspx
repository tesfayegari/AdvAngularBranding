<%@ Page language="C#"   Inherits="Microsoft.SharePoint.Publishing.PublishingLayoutPage,Microsoft.SharePoint.Publishing,Version=15.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="SharePointWebControls" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> <%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> <%@ Register Tagprefix="PublishingWebControls" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> <%@ Register Tagprefix="PublishingNavigation" Namespace="Microsoft.SharePoint.Publishing.Navigation" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<asp:Content ContentPlaceholderID="PlaceHolderPageTitle" runat="server">
	<SharePointWebControls:FieldValue id="PageTitle" FieldName="Title" runat="server" />
</asp:Content>
<asp:Content ContentPlaceholderID="PlaceHolderMain" runat="server">
<div>
    <h2>
        <SharePointWebControls:TextField runat="server" FieldName="Title"/>
    </h2>
    <div class="content-cont">
            <PublishingWebControls:RichHtmlField FieldName="PublishingPageContent" HasInitialFocus="False" MinimumEditHeight="200px" runat="server" />
    </div>
    <div class="sp-zones-cont left">
        <WebPartPages:WebPartZone runat="server" Title="Left Column" ID="LeftColumn"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
    </div>     
</div>	
</asp:Content>
