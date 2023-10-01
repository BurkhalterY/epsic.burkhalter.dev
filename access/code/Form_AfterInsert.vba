Private Sub Form_AfterInsert()
	DoCmd.SetWarnings False
	DoCmd.RunSQL "INSERT INTO T_Avoir_Email (FK_Personne, FK_Email) VALUES (" & Me.OpenArgs & ", " & Me.ID_Email & ")"
	DoCmd.SetWarnings True
	DoCmd.Close
	Forms!F_Personne.Emails.Requery
End Sub