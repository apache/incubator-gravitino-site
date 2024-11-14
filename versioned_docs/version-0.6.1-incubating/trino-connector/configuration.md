---
title: "Apache Gravitino Trino connector Configuration"
slug: /trino-connector/configuration
keyword: gravitino connector trino
license: "This software is licensed under the Apache License version 2."
---

| Property                         | Type    | Default Value               | Description                                                                                                                                                                                                                                                                                                         | Required | Since Version |
|----------------------------------|---------|-----------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|---------------|
| connector.name                   | string  | (none)                      | The `connector.name` defines the type of Trino connector, this value is always 'gravitino'.                                                                                                                                                                                                                         | Yes      | 0.2.0         |
| gravitino.metalake               | string  | (none)                      | The `gravitino.metalake` defines which metalake in Gravitino server the Trino connector uses. Trino connector should set it at start, the value of `gravitino.metalake` needs to be a valid name, Trino connector can detect and load the metalake with catalogs, schemas and tables once created and keep in sync. | Yes      | 0.2.0         |
| gravitino.uri                    | string  | http://localhost:8090       | The `gravitino.uri` defines the connection URL of the Gravitino server, the default value is `http://localhost:8090`. Trino connector can detect and connect to Gravitino server once it is ready, no need to start Gravitino server beforehand.                                                                    | No       | 0.2.0         |
| trino.jdbc.user                  | string  | admin                       | The jdbc user name of current Trino.                                                                                                                                                                                                                                                                                | NO       | 0.5.1         |
| trino.jdbc.password              | string  | (none)                      | The jdbc password of current Trino.                                                                                                                                                                                                                                                                                 | NO       | 0.5.1         |