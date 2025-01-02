# Copilot Sandbox
oauth_client_id = "ABC..."
oauth_client_secret = "123..."
redirect_uri = "https://google.com"

print("Click this link, select your workspace, click `Connect Workspace`")
print(ClickupAPIWrapper.get_access_code_url(oauth_client_id, redirect_uri))

# Click this link, select your workspace, click `Connect Workspace`
# https://app.clickup.com/api?client_id=ABC...&redirect_uri=https://google.com

code = "THISISMYCODERIGHTHERE"
access_token = ClickupAPIWrapper.get_access_token(
    oauth_client_id, oauth_client_secret, code
)

# Init toolkit
clickup_api_wrapper = ClickupAPIWrapper(access_token=access_token)
toolkit = ClickupToolkit.from_clickup_api_wrapper(clickup_api_wrapper)
print(
    f"Found team_id: {clickup_api_wrapper.team_id}.\nMost request require the team id, so we store it for you in the toolkit, we assume the first team in your list is the one you want. \nNote: If you know this is the wrong ID, you can pass it at initialization."
)
Found team_id: 9011010153.
Most request require the team id, so we store it for you in the toolkit, we assume the first team in your list is the one you want. 
Note: If you know this is the wrong ID, you can pass it at initialization.
