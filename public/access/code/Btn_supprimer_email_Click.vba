Private Sub Btn_supprimer_email_Click()
	If Me.Emails.ListIndex >= 0 Then
		reponse = MsgBox("Voulez-vous vraiment supprimer cet email ?", vbYesNo + vbCritical)
		If reponse = vbYes Then
			DoCmd.SetWarnings False
			DoCmd.RunSQL "DELETE FROM T_Avoir_Email WHERE ID_Avoir_Email = " & Me.Emails.Column(0, Me.Emails.ListIndex)
			DoCmd.SetWarnings True
			Forms!F_Personne.Emails.Requery
		End If
	End If
End Sub