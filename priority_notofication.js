const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJjc2gyMzA3MkBnbGJpdG0uYWMuaW4iLCJleHAiOjE3ODI0NTM5NTksImlhdCI6MTc4MjQ1MzA1OSwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjA3ZjE5MjIzLTFlNTQtNGE1MC1iZThhLWRhM2VkNzIxYzc2ZiIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InRhcmFuZyBtaXNocmEiLCJzdWIiOiJiOTg3YWFjYS1jZWNlLTRkZjctYjRmNy1jMDFhODllYzNmMGMifSwiZW1haWwiOiJjc2gyMzA3MkBnbGJpdG0uYWMuaW4iLCJuYW1lIjoidGFyYW5nIG1pc2hyYSIsInJvbGxObyI6IjIzMDE5MjE2OTAwNjgiLCJhY2Nlc3NDb2RlIjoieHhrSm5rIiwiY2xpZW50SUQiOiJiOTg3YWFjYS1jZWNlLTRkZjctYjRmNy1jMDFhODllYzNmMGMiLCJjbGllbnRTZWNyZXQiOiJkckhucFNLeWplaFh6a0FZIn0.fbq2eWegRHHq-AjML-o7rQ5JpIp1ZOXRNJFmRpvv4Dc"

async function fetchnotifications() {
     const response=await fetch("http://4.224.186.213/evaluation-service/notifications",
        {
            method:'GET',
            headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
        }
     )
     const data=await response.json()
    const notifications = data.notifications; 
   
     
 notifications.sort((a, b) => new Date(b.Timestamp) - new Date(a.Timestamp));
   
    const placements = notifications.filter(itemnotify => itemnotify.Type === 'Placement');
    const results = notifications.filter(itemresult => itemresult.Type === 'Result');
    const events = notifications.filter(itemevent => itemevent.Type === 'Event');


     const top10 = [
        ...placements,
        ...results,
        ...events
    ].slice(0, 10);

  
     
}
fetchnotifications()