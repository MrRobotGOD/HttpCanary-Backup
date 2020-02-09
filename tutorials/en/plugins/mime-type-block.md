### Mime-Type Blocking

The Mime-Type blocking plugin can block specified HTTP requests or responses. You need to configure in /HttpCanary/plugins/MimeTypeBlock/req-mimes.txt or res-mimes.txt. The former file is used to add rules for blocking request data, and the latter is used to add rules for blocking response data. These two file are automatically created when the plugin is installed. You could add or edit the specified Mime-Type directly in them. The **version v3.1.5** and later support using * and ? wildcard character.

Taking req-mimes.txt as an example, the configured Mime-Type format is as follows:
```
# blocking image requests (using wildcard character *)
image/*

# blocking JSON requests
application/json
```

Here are the examples of req-mimes.txt and res-mimes.txt:

[Demo File](https://raw.githubusercontent.com/MegatronKing/HttpCanary/master/plugins/MimeTypeBlock/req-mimes.txt)

[Demo File](https://raw.githubusercontent.com/MegatronKing/HttpCanary/master/plugins/MimeTypeBlock/res-mimes.txt)

To get more about Mime-Type, you can refer to:
[Official MimeType List](https://www.iana.org/assignments/media-types/media-types.xhtml)