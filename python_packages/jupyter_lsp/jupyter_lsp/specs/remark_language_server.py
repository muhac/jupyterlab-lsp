from .utils import NodeModuleSpec


class RemarkLanguageServer(NodeModuleSpec):
    node_module = key = "remark-language-server"
    script = ["index.js"]
    args = ["--stdio"]
    languages = ["markdown", "ipythongfm", "gfm"]
    spec = dict(
        display_name=key,
        mime_types=["text/x-gfm", "text/x-ipythongfm", "text/x-markdown"],
        urls=dict(
            home="https://github.com/remarkjs/{}".format(key),
            issues="https://github.com/remarkjs/{}/issues".format(key),
        ),
        install=dict(
            npm="npm install --save-dev {}".format(key),
            yarn="yarn add --dev {}".format(key),
            jlpm="jlpm add --dev {}".format(key),
        ),
    )
