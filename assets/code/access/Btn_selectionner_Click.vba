Private Sub Btn_selectionner_Click()
	DoCmd.SetWarnings False
	DoCmd.RunSQL "INSERT INTO T_Avoir_Email (FK_Personne, FK_Email) VALUES(" & Me.OpenArgs & ", " & Me.Emails.Column(0, Me.Emails.ListIndex) & ")"
	DoCmd.SetWarnings True
	DoCmd.Close
	Forms!F_Personne.Emails.Requery
End Sub