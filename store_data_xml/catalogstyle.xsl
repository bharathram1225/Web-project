<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="https://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html> 
	<head>
		<title> BHARATH</title>
	</head>
	
	</Style>
<body>
  <h2>Student details</h2>
  <table border="1" >
    <tr bgcolor="#9acd32">
      <th style="text-align:left">Name</th>
      <th style="text-align:left">Class</th>
      <th style="text-align:left">Gender</th>
      <th style="text-align:left">College</th>
    </tr>
    <xsl:for-each select="student/bio">
    <tr>
      <td><xsl:value-of select="name"/></td>
      <td><xsl:value-of select="class"/></td>
      <td><xsl:value-of select="gender"/></td>
      <td><xsl:value-of select="college"/></td>
    </tr>
    </xsl:for-each>
  </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>

