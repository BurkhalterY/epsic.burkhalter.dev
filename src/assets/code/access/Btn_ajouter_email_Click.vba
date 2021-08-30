Private Sub Btn_ajouter_email_Click()
	DoCmd.OpenForm "F_Ajouter_Email", acNormal, , , acFormAdd, acDialog, Me.ID_Personne
End Sub