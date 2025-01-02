# Copilot Sandbox
oauth_client_id = "ABC..."
oauth_client_secret = "123..."
redirect_uri = "https://google.com"

print("Click this link, select your workspace, click `Connect Workspace`")
print(ClickupAPIWrapper.get_access_code_url(oauth_client_id, redirect_uri))

# Click this link, select your workspace, click `Connect Workspace`
# https://app.clickup.com/api?client_id=ABC...&redirect_uri=https://google.com
