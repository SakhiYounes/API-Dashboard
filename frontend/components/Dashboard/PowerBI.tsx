import { PowerBIEmbed } from "powerbi-client-react";
import { models } from 'powerbi-client'
import './styles/powerBI.module.css'



function PowerBI(){
    return(
        <div className="powerbi-container">
          <PowerBIEmbed
    embedConfig = {{
        type: 'report',   // Supported types: report, dashboard, tile, visual and qna
        id: '91beb0e6-45f7-449a-9ff6-c4dfd2877305',
        embedUrl: "https://app.powerbi.com/reportEmbed?reportId=91beb0e6-45f7-449a-9ff6-c4dfd2877305",
        accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYTk5OTUwZmQtMjU4Mi00ZjMwLTkxNmUtZmMwNjFiN2EyNThiLyIsImlhdCI6MTY4NDI0MzgwNSwibmJmIjoxNjg0MjQzODA1LCJleHAiOjE2ODQyNDkzMTQsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUEyZ3NHWnVIREJMc01ZV09OZURjSzZUZ3ExVnV1WmJ0MzdmdEZRR1B6a21ZZjkvVjZMTEtJNUZpazU0NEhoaHFQIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiU0FLSEkiLCJnaXZlbl9uYW1lIjoiWU9VTkVTIiwiaXBhZGRyIjoiNDEuOTIuMTI1LjE0NyIsIm5hbWUiOiJTQUtISSBZT1VORVMiLCJvaWQiOiIxNDE5ZDViNC01ZDFkLTQxMGUtOGIzNC00MTU5YWRmNzZhMzMiLCJwdWlkIjoiMTAwMzIwMDBGMzNEQ0QzQyIsInJoIjoiMC5BVGtBX1ZDWnFZSWxNRS1SYnZ3R0czb2xpd2tBQUFBQUFBQUF3QUFBQUFBQUFBQTVBQXMuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiaExlT1pzdGZXRktYbU9IRzNxajV1V2FEWjVUTmxGdmg5bTZNUVZuSmJCTSIsInRpZCI6ImE5OTk1MGZkLTI1ODItNGYzMC05MTZlLWZjMDYxYjdhMjU4YiIsInVuaXF1ZV9uYW1lIjoieW91bmVzX3Nha2hpQHVtNS5hYy5tYSIsInVwbiI6InlvdW5lc19zYWtoaUB1bTUuYWMubWEiLCJ1dGkiOiJoRGEwLXZDZ1AwcTlTQzdKSEhFRUFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXSwieG1zX3BsIjoiZW4tVVMifQ.XuOpMJX8f4gnD05ZvLUmZMeOUvtYNyOkc-9txRAA78X6ePinAAiNhvpLpcAqLqt62Q5l5HQN7I329t2crjNbG3pMPgOy3S_jxvUYwbzUVbHWZCklBB2k1RJeTnYntVbg3-15gJt4TEm-JFMixMVXPUO2rKd_SCdUKCCqTZcYUXr6l36BrSvjocKedxRdscf4-D35B_o0Daf1_w5ts7GoDhwYm6Wr-VYq5QasrrUiAM5ppZ6LD0U47lDvhh4LwB1Gavn21eyroLp4LdTG8vQ1j0bVMUwCpwsNIWhyLPs2aiJCCaMtO3yb9gRMnqvZzZQHlUNBvE6P-67B58-Osj5Www',
        tokenType: models.TokenType.Aad,
        settings: {
            panes: {
                filters: {
                    expanded: false,
                    visible: false
                }
            },
            background: models.BackgroundType.Transparent,
        }
    }}

    eventHandlers = { 
        new Map([
            ['loaded', function () {console.log('Report loaded');}],
            ['rendered', function () {console.log('Report rendered');}],
            ['error', function (event) {console.log(event.detail);}]
        ])
    }
        
    cssClassName = "powerbi-container"

    getEmbeddedComponent = { (embeddedReport) => {
        window.report = embeddedReport;
    }}
/>

        </div>
    );
}
export default PowerBI;